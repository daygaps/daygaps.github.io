---
title: "Hand the schema to your AI"
description: "DayGaps stores everything as plain YAML in a folder you own. This page is the schema you can give an AI assistant so it can read and write the same files the app does."
date: 2026-05-24
---

DayGaps doesn't have an API. It doesn't need one. Your data is plain YAML and Markdown in a folder of your choosing, and any tool that can read and write text files can drive it. That includes the assistant on the other end of your ChatGPT or Claude conversation.

This page is the schema you can paste into a chat with your assistant of choice. Once it knows the structure, you can ask things like "look at my paper project and move the section-3 tasks earlier" or "what's overdue and which of those should I drop?" and the assistant can read, decide, and edit the files directly.

## The folder

```
~/Dropbox/daygaps/
├── areas.yaml                       # area declarations
├── inbox.yaml                       # flat capture list
├── scratchpad.md                    # free-form notes
├── days/YYYY-MM-DD.yaml             # one file per day with gaps
├── <area>/<project-id>.yaml         # project files
├── <area>/<subfolder>/<project-id>.yaml   # one level of grouping
└── archive/<area>/...               # archived projects
```

The path is whatever the user picked when they set up DayGaps. The structure inside is always this shape. There are no hidden indexes or sidecar databases; everything is in the files you can see.

## areas.yaml

Declares the area folders, with display names, colors, and SF Symbol icons.

```yaml
areas:
  - folder: research
    name: Research
    color: blue
    icon: flask

  - folder: teaching
    name: Teaching
    color: green
    icon: book

pinned:
  - p-paper24
  - p-stats301
```

Field notes:

- `folder` is the directory name on disk under the root.
- `name` is the display label in the sidebar.
- `color` is a SwiftUI color token: `red`, `orange`, `yellow`, `green`, `mint`, `teal`, `cyan`, `blue`, `indigo`, `purple`, `pink`, `brown`, `gray`. Unknown values render as gray.
- `icon` is an SF Symbol name. Anything Apple ships.
- `pinned` is a flat list of project ids that appear at the top of the sidebar regardless of area order.

The app only renders areas listed here. A folder that exists on disk but is not declared in `areas.yaml` is ignored. This is intentional: it lets users keep auxiliary folders (notes, exports) next to the real data without polluting the sidebar.

## Project files

One file per project, sitting under its area folder. The filename is its `id` plus `.yaml`. The area is derived from the parent folder; there is no `area:` field inside the file.

```yaml
# Created by DayGaps. Area is derived from the parent folder (no `area:` field).

project:
  id: p-paper24
  name: Q2 Paper Draft
  status: active
  created: 2026-04-14
  notebook: false

  purpose: |-
    Write up the Q2 measurement results. Target journal: J. Climate.
    Co-authors: M. Chen, R. Patel. Done when the manuscript is submitted.

tasks:
  - header: Writing

  - id: t-paper-001
    gap: "07:30"
    date: 2026-05-24
    title: Finish results section
    done: false
    subtasks:
      - id: t-paper-001-s1
        title: rerun anomaly plot with new colormap
        done: true
      - id: t-paper-001-s2
        title: cross-check the numbers in Table 2
        done: false

  - id: t-paper-002
    date: 2026-05-24
    title: Outline the discussion section
    done: false
    notes: keep it under one page

  - header: Submission

  - id: t-paper-020
    title: Format references in journal style
    done: false
```

Project header block:

- `id` is `p-` followed by a short hex string. The app generates these on creation; an assistant can reuse the same scheme. Must be unique within the folder.
- `name` is the display label.
- `status` is `active` or `archived`. Archived projects move to `archive/<area>/<project-id>.yaml`.
- `created` is the project's creation date.
- `notebook` is a boolean. When true, the project is treated as a notebook (free-form notes); when false, it's a task project. Most projects are `false`.
- `purpose` is an optional long-form block (multi-line, using YAML's `|-` literal style). The app shows it as a section at the top of the project view.

Tasks list:

- Each item is either a `- header: "..."` row (a section divider that the app renders as bold text inside the project) or a task object.
- Task fields: `id` (required, `t-` prefix), `title` (required), `date` (optional, `YYYY-MM-DD`), `gap` (optional, `"HH:mm"` quoted), `done` (boolean, default false), `notes` (optional single-line string), `subtasks` (optional list with the same shape minus `subtasks`/`date`/`gap`).

## Day files

One file per day that has any named gaps. The filename is the date plus `.yaml` under `days/`.

```yaml
# Day file. Gaps for 2026-05-24. Tasks are NOT stored here;
# they are queried from project files whose tasks have date == this date.

date: 2026-05-24

gaps:
  - time: "07:30"
    label: Morning writing
    reminder: true

  - time: "10:30"
    label: Before lab meeting

  - time: "21:00"
    label: Evening review
```

Field notes:

- `date` is the day this file describes. Must match the filename.
- `gaps` is the list of named time chunks for the day. Each gap has a quoted `time` ("HH:mm" 24-hour), an optional `label`, and an optional `reminder: true`.
- The day file holds the *gaps*, not the tasks. Tasks are pulled from project files whose `date:` matches this day. To "schedule" a task into a gap, edit the task in its project file and add a `gap: "HH:mm"` whose value matches a gap in this day file.

A `reminder: true` gap fires a notification on the Mac at the gap's wall-clock time on every day the file exists in the rolling seven-day window. If you don't want a notification, omit the field.

## Inbox

A single flat list of captured items, in `inbox.yaml`.

```yaml
items:
  - id: i-001
    title: Cite the 2025 review in section 3 of the paper
    captured: 2026-05-24T09:42:00
    notes: ~

  - id: i-002
    title: Ask R about the colormap they used in fig 7
    captured: 2026-05-24T12:11:00
    notes: ~
```

Field notes:

- `id` is `i-` plus a short hex string.
- `title` is the captured one-line content.
- `captured` is an ISO-8601 timestamp (no timezone offset; assume local time).
- `notes` is an optional single-line string. The `~` is YAML for null; absent fields are also fine.

Triage: move an item out of `inbox.yaml` and into a project's `tasks:` list, giving it a `t-` id. The item just vanishes from the inbox; it doesn't get archived. The assistant should not leave orphan items in the inbox after triage.

## Scratchpad

Free-form Markdown. The app shows it as a single editable Markdown surface; no structure imposed. Useful for ideas, outlines, half-formed thoughts, anything that doesn't fit a project yet.

```markdown
# Notebook

Discussion section outline:
- lead with the unexpected magnitude in the spring window
- tie back to the 2022 anomaly
- close on the experiment we want to do next, not on hedges

Reminder to self: ask M about the colormap on figure 7 before sending.
```

## Field semantics

The schema is small but a few rules govern how things show up in the app.

**A task is *anyday* until it gets a `date:`.** Anyday tasks show up in the project view tagged "Anyday." They don't appear in Today, Tomorrow, or This Week.

**A task is *anytime* within a day until it gets a `gap:`.** Once a task has a `date:` but no `gap:`, it shows up on that day in the Anytime section at the bottom, not under any gap header.

**`gap:` must match a `time:` in that day's file.** If you set `gap: "07:30"` on a task dated 2026-05-24, the day file `days/2026-05-24.yaml` must list a gap with `time: "07:30"`. Otherwise the task falls through to Anytime on that day. The app does not auto-create gaps.

**Subtasks don't get scheduled.** A subtask's whole lifecycle is whether it's done; it inherits its parent task's date, gap, and project. Don't try to schedule a subtask separately.

**Archive is a folder move.** Setting `status: archived` is not enough; the file should also move from `<area>/<project>.yaml` to `archive/<area>/<project>.yaml`. The app's archive command does both.

## Editing the files

DayGaps' own writes are intentionally **surgical and line-based.** When the app changes one field, it does not re-serialize the whole file: it locates the line, edits in place, and saves. This preserves your comments, your trailing whitespace, and your hand-written ordering.

An assistant editing the files should aim for the same discipline. Read the file, change the minimum, write the file back. If you do a full re-serialize, you'll lose any comments the user added.

Concretely:

- To mark a task done: change `done: false` to `done: true` on the task's `done` line. Don't touch anything else.
- To reschedule a task: change the `date:` line. Add a `date: YYYY-MM-DD` line under the title if the task didn't have one before.
- To move a task to a new gap: change the `gap:` line. Add or remove it as needed.
- To capture an idea: append a new item to `inbox.yaml` with a fresh `i-` id and the current timestamp.

The app reads the file system continuously (via FSEvents on macOS), so a write from an assistant lands in the running app within a few hundred milliseconds.

## A useful first prompt

Paste the headings of this page into a fresh chat with your assistant of choice, point it at your folder, and ask it what you want. A typical first prompt:

> Here is the DayGaps schema. My data folder is at `~/Dropbox/daygaps/`. Please read `areas.yaml` and `inbox.yaml` to start, then `days/YYYY-MM-DD.yaml` for today. Suggest a small triage pass: which inbox items belong in which project, and where in the day the most important ones should go.

The assistant reads the files, proposes a plan, and on your okay, makes the edits. The next time DayGaps refreshes, the changes are there.
