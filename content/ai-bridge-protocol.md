---
title: "AI Bridge Protocol"
description: "How an AI assistant edits DayGaps YAML files cleanly through the bridge."
date: 2026-06-10
draft: false
---

# DayGaps AI Bridge Protocol

This document is the contract between DayGaps and anything editing its YAML files through the bridge. Follow it exactly and your edits will round-trip cleanly. Assumptions: UTF-8 file encoding, LF line endings, two-space indentation, no tabs.

---

## 1. What the bridge is

The user opens the bridge in DayGaps and picks a scope (one or more Areas). The app writes a fresh snapshot of those areas' project files and an `inbox.yaml` to a folder on disk. While the bridge is open, the app is read-only. You edit the YAML in that folder. When the user closes the bridge, the app reads what is on disk and atomically replaces the in-scope contents with the new YAML.

Three consequences matter to you.

**What you write is what becomes truth.** Anything you delete from a YAML file is deleted. Anything you add is added. This is snapshot replace per file, not diff-and-merge.

**The bridge is a single round trip.** Once closed, the bridge is done. To make more edits, the user reopens, which writes a fresh snapshot. Do not hold cached state between sessions.

**The unit of write is one file.** You may edit any number of files in one session. Each file is replaced atomically and independently, so an id cannot move between files. Cross-file relocation (project to project, or inbox to project) is delete-from-source + recreate-with-fresh-id in destination. See section 6.

---

## 2. What you can and cannot edit

You can edit:

- **Existing project files**: `<area-folder>/p-xxxxxx.yaml`.
- **The inbox**: `inbox.yaml`.

You cannot edit, create, or delete:

- `areas.yaml`: area metadata is the user's, not yours.
- `days/<date>.yaml`: gap definitions are owned by the app.
- `<area-folder>/_anyday.yaml` and `_anyday-archive.yaml`.
- `<area-folder>/archive/`: archived projects.
- `backups/`: pre-bridge snapshots, the user's safety net.
- New project files.
- New area folders.

If a YAML file is not in the "can edit" list above, do not open it for writing. You may read it for context (for example, to understand structure), but any edit you make to it will be discarded silently or break the snapshot.

---

## 3. Confirm access before you do anything

Do these four steps in order, every session.

1. **Read the folder path the user gave you.** If they did not name a path, ask. Do not guess.

2. **Verify you can reach it.** List the folder. If you cannot list it, tell the user plainly and stop. Do not write somewhere else as a workaround.

3. **Describe what you see.** Name the areas present, count the project files in each, note whether `inbox.yaml` is empty or has items. The user uses this to confirm you are looking at the right snapshot.

4. **Wait for confirmation.** "Looks right, go ahead" is confirmation. Silence is not.

If the user closes the bridge and reopens it, restart at step 1.

---

## 4. Folder layout (for orientation)

```
<bridge folder>/
├── areas.yaml              ← read-only to you
├── inbox.yaml              ← editable
├── days/                   ← read-only to you
│   └── 2026-06-10.yaml
├── work/                   ← one folder per in-scope area
│   ├── _anyday.yaml        ← read-only to you
│   ├── p-a1b2c3.yaml       ← editable
│   ├── p-d4e5f6.yaml       ← editable
│   └── archive/            ← read-only to you
└── backups/                ← hands off entirely
```

Only the area folders the user selected for this session will be present. Out-of-scope areas are simply absent from disk.

You may see project files whose id starts with `p-default-` (e.g. `p-default-work.yaml`). These are hidden default projects the app uses for area-direct tasks. You may add tasks to them, but you may not rename, delete, or change their ids.

---

## 5. Project file format

```yaml
project:
  id: p-a1b2c3
  name: Q3 launch plan
  status: active
  purpose: |-
    Ship DayGaps v1.0 to TestFlight by mid-July.
  due_date: 2026-07-15
  last_edited: 2026-06-10T14:22:07Z
  me:
    pinned: true
    sort_index: 1000

tasks:
  - header: Planning

  - id: t-aa11bb
    title: Draft launch checklist
    done: true
    due_date: 2026-06-09
    me:
      date: 2026-06-10
      gap: "09:00"

  - id: t-cc22dd
    title: Send TestFlight invites
    done: false
    me:
      date: 2026-06-10
      subtasks_collapsed: false
    subtasks:
      - id: t-ee33ff
        title: Compile invite list
        done: true
      - id: t-aa44bb
        title: Send via App Store Connect
        done: false

  - header: Marketing

  - id: t-bb55cc
    title: Take new Mac screenshots
    done: false
```

**The `project:` block.**

- `id:` must match the filename stem. Six lowercase hex chars after `p-`, or the literal `p-default-<area-folder>` form. Never rename.
- `name:` is the display name. Quote per section 7.
- `status:` is `active` or `archived`. Leave whatever is there unchanged unless the user explicitly asks you to archive (and even then you can only set the field; you cannot move the file into `archive/`).
- `purpose:` is optional freeform markdown via `|-` block scalar.
- `due_date:` is optional `yyyy-MM-dd`.
- `last_edited:` is REQUIRED. Update to the current UTC time (`yyyy-MM-ddTHH:mm:ssZ`) whenever you change the file.
- `me:` is optional per-user state.
  - `pinned:` boolean.
  - `sort_index:` integer. Lower numbers come first within the area.

**The `tasks:` list.** Ordered. Order in the file is the order shown in the project view.

**Headers.** Section dividers.

```yaml
  - header: Planning
```

No id. Position in the list is identity.

**Tasks.**

- `id:` `t-` plus six lowercase hex chars. Never reuse or rename.
- `title:` quoted per section 7. `#tag` substrings inside the title are read as ephemeral tags by the app; no registration needed.
- `done:` required boolean.
- `due_date:` optional `yyyy-MM-dd`. Independent of `me.date`. Lives on the shared task.
- `me:` optional per-user state.
  - `date:` optional `yyyy-MM-dd`. Schedules the task to that day for the current user. **See section 8 for the strict rule that governs this.**
  - `gap:` optional `"HH:mm"`, double-quoted. Pins the task to a specific gap on its `me.date`. **See section 8.**
  - `subtasks_collapsed:` optional boolean.
- `subtasks:` optional ordered list. Each subtask has `id:`, `title:`, `done:`. Subtasks inherit the parent's project and per-user schedule; they do not carry their own `me:` block. A parent task cannot be marked `done: true` while any subtask is `done: false`.

---

## 6. Allowed edits

Within an existing project file, you may:

- Edit a task's `title:`, `done:`, `due_date:`.
- Reschedule a task by changing `me.date:` and/or `me.gap:` (read section 8 first).
- Unschedule a task by removing the fields under `me:` (or removing the whole `me:` block).
- Reorder tasks within the `tasks:` list.
- Move a task between sections within the same file by moving its entry past the desired `- header:` row.
- Add a section header anywhere in the list.
- Add a new task. Mint a fresh `t-` id. Section 7 covers id minting.
- Add a new subtask under an existing parent task. Mint a fresh `t-` id.
- Delete a task or subtask by removing its YAML entry.
- Set `project.me.pinned:` and `project.me.sort_index:`.
- Update `project.name:`, `project.purpose:`, `project.due_date:`, `project.status:`.

Within `inbox.yaml`, you may add new inbox items (mint a fresh `i-` id), delete existing ones, edit titles and notes. You may not move them anywhere; the app's triage UI handles that.

You may not, in any file:

- Rename, move, or delete files.
- Change an existing record's `id:`.
- Duplicate an id across records.
- Create files outside the documented layout.

**Cross-project task transfer within the same area** happens as **delete + recreate**, never as a literal move. To move a task from `work/p-aaa.yaml` to `work/p-bbb.yaml`:

1. Delete the task entry from `p-aaa.yaml` and update its `project.last_edited:`.
2. Mint a **fresh** `t-` id for the destination.
3. Add a new task entry to `p-bbb.yaml` with the new id, carrying the title, `done`, and (if you want them) `due_date`, `me.date`, `me.gap` over by hand. Update `p-bbb.yaml`'s `project.last_edited:`.

The destination task is a new record. Subtasks, the source id, and any history do not transfer automatically. Mint fresh ids for any subtasks you want carried.

Cross-area transfer (e.g., `work/...` to `home/...`) is NOT supported in v1.0. Do not attempt it.

**Inbox triage** uses the same pattern: delete from `inbox.yaml`, add a new task to a project file with a fresh `t-` id.

---

## 7. Creating new ids

When you add a record, mint a new id with the right shape:

- Task and subtask: `t-` + six lowercase hex chars (`0-9`, `a-f`).
- Inbox item: `i-` + six lowercase hex chars.

Headers and gaps have no id; their position in their parent list is identity.

You must guarantee the id is unique within the bridge folder. Before minting, grep every `.yaml` file outside `backups/` for the candidate id. If it appears anywhere, pick another. When generating in batch, draw from a cryptographic random source and check each candidate against the folder.

---

## 8. Scheduling rule (strict)

When you set a task's `me.date:` and/or `me.gap:`, the task is scheduled to that date and gap for the current user. The Today view of the app shows tasks scheduled to the current date.

**A task scheduled to a `me.date` or `me.gap` that does not exist on disk will be silently hidden in the Today view.** No error, no warning. The task is in the data; it just does not appear where the user expects.

Existence rules:

- `me.date:` is valid only if `days/<that-date>.yaml` exists in the snapshot. (Even an empty day file is enough; just the existence of the file is what counts.) Day files are not editable by you. If `me.date` refers to a day with no day file, do not set `me.date` on that task.
- `me.gap:` is valid only if `days/<me.date>.yaml` exists AND contains an entry in `gaps:` whose `time:` matches `me.gap:` exactly. If the gap is not present, do not set `me.gap`.

These checks are non-negotiable because the failure mode is invisible to the user. If the user asks you to schedule a task to a date or gap that does not exist, you have two correct responses:

1. **Tell the user the date or gap does not exist in this snapshot, and stop.** Ask them to add the day or gap from inside the app, then reopen the bridge and ask you again.
2. **Pick a `me.date` and `me.gap` that DO exist** in the current snapshot, if that satisfies the request. Tell the user what you picked and why.

Setting `me.date:` without `me.gap:` is allowed (task appears on the day with no specific time block), but `me.date:` itself still requires the day file to exist.

Setting `me.gap:` without `me.date:` is never allowed.

---

## 9. String quoting

Use double quotes around any string that contains anything other than:

- ASCII letters and digits
- spaces (interior, not leading or trailing)
- the safe punctuation `_ - / . @`

Inside double quotes, escape `"` as `\"` and `\` as `\\`.

```yaml
title: Draft launch checklist            # safe, no quotes needed
title: "Refactor: pull RightPane apart"  # contains a colon, quote
title: "Email \"Dr. Lee\" tomorrow"      # contains quotes, escape
title: "Q3 #site work"                   # contains hash, quote
title: ""                                # empty string, must quote
```

Multi-line strings (`purpose:`, inbox `notes:`) use YAML block scalar `|-`:

```yaml
purpose: |-
  First line.
  Second line.
```

Do not use single quotes. Do not use `|` or `|+` or `>`.

---

## 10. Hard rules

- Preserve every `id:` exactly as written on records you did not change.
- Update `project.last_edited:` in every project file you modified, to the current UTC time in `yyyy-MM-ddTHH:mm:ssZ` form.
- Two-space indentation. No tabs.
- Booleans are lowercase `true` and `false`.
- Date fields are `yyyy-MM-dd`. Time fields are 24-hour `"HH:mm"` double-quoted. Datetime fields are ISO-8601 UTC.
- Per-user fields (`pinned`, `sort_index`, `date`, `gap`, `subtasks_collapsed`) live only inside a `me:` block, never at the top level of a record.
- UTF-8, LF, no BOM.
- No em dashes anywhere. Use period, colon, comma, or parens.
- No fields outside what this document describes. Unknown fields are dropped on read and lost forever.

---

## 11. End-to-end example

You are asked to add three tasks to `work/p-a1b2c3.yaml`, all tagged `#launch`. One is scheduled for 2026-06-12 in the existing 09:00 gap, one has a 2026-06-15 deadline but no schedule, one is just captured for later.

Before scheduling: confirm `days/2026-06-12.yaml` exists and that its `gaps:` list contains an entry with `time: "09:00"`. If either is missing, do not schedule; tell the user.

Read `work/p-a1b2c3.yaml`. Note existing ids: `t-aa11bb`, `t-cc22dd`, `t-ee33ff`, `t-aa44bb`, `t-bb55cc`.

Mint three new ids that do not collide: `t-44ee01`, `t-44ee02`, `t-44ee03`. (In practice, draw from random bytes and grep the folder.)

Append the tasks, then update `project.last_edited:`.

```yaml
  - header: Launch tasks

  - id: t-44ee01
    title: Confirm TestFlight reviewers #launch
    done: false
    me:
      date: 2026-06-12
      gap: "09:00"

  - id: t-44ee02
    title: Finalize App Store screenshots #launch
    done: false
    due_date: 2026-06-15

  - id: t-44ee03
    title: Draft launch email #launch
    done: false
```

---

## 12. Validation checklist

Before declaring an edit complete:

- All `id:` fields preserved unchanged on records you did not touch.
- All new ids are unique across the bridge folder (excluding `backups/`).
- Every project file you modified has an updated `project.last_edited:`.
- Every `me.date:` you set refers to an existing day file in `days/`.
- Every `me.gap:` you set refers to a gap that exists in that day's file.
- Every `time:` and `me.gap:` is double-quoted.
- Per-user fields live inside `me:` blocks.
- All booleans are lowercase, all dates `yyyy-MM-dd`.
- Two-space indentation, no tabs, UTF-8, LF.
- No edits to files outside the editable list in section 2.

---

## 13. Announce completion

When the validation checklist passes, tell the user explicitly that you are done. Silence at the end of a session is the worst state.

A complete handoff has three parts:

1. **Direct statement that edits are saved.** "I have finished updating the bridge folder. All YAML files are saved."
2. **Concrete summary of what changed.** Name each file you modified and one line per file describing what changed.
3. **Next-step instruction.** "You can now check in via the Bridge menu on the Mac."

If you flagged anything for the user during the session (a request you could not fulfill, a scheduling rule that blocked an edit), surface it here, not buried in mid-session chatter.

Do not start a new edit after the completion message unless the user gives new instructions. The completion message is a commitment: from that moment until the user replies, your edits are final.

If you cannot complete the requested edits because a rule would be violated, say so instead of sending a completion message. Never send a completion message while leaving silent partial work behind.

---

## 14. Version

This document describes the DayGaps bridge protocol as of **v1.0** (June 2026). The protocol is stable within a major version. If DayGaps issues a major-version schema change, an updated version of this document will ship with the app.
