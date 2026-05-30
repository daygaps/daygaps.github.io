---
title: "FAQ"
description: "Common questions about how DayGaps works, what's intentionally missing, and how to set things up."
date: 2026-05-24
---

This page mirrors the **DayGaps Help** sheet inside the Mac app (open from the Help menu, or press ⌘?). If something here is out of sync with what the app shows, the in-app version is the source of truth.

## Gaps

A **gap** is a chunk of time between calendar commitments, the part of the day you actually have to spend. The Day view shows your gaps as horizontal sections, each with a time label and an optional name.

To add a gap, click the inline *+ Add gap* button just above the day's footer, or press ⇧⌘N. To edit a gap, right-click its header for rename, delete, or set-reminder. A reminder fires a macOS banner at the gap's wall-clock time on every day it exists in the rolling seven-day window.

On iPhone, tap the gap's header to open the same editor. Swipe left on a gap header to delete it.

## Scheduling tasks

Every task can be **dated**, **gap-assigned**, **both**, or **neither**. Dating puts the task on a day; gap-assigning slots it into a specific gap. Tasks without a date are *Anyday* (no day assigned yet); tasks with a date but no gap are *Anytime* on that day.

To reschedule on the Mac, click the calendar glyph on any task row. The popover offers a calendar and, for today, a row of "Today @ HH:mm" gap pills so you can pick the date and the gap in one click.

On iPhone, swipe-right on a task moves it to a different gap on the same day; swipe-left opens a date picker. On a project view, swipe-left becomes *Assign date* for tasks that don't have one yet.

Drag-and-drop also works on the Mac:

- From the inbox onto a project or onto a day cell on the month calendar.
- From one gap's row onto another gap's header within the same day, to re-assign the task.

## Where your data lives

Day Gaps stores areas, projects, tasks, headers, gaps, days, and inbox items in your private CloudKit zone. There's no shared backend, no Day Gaps server: the data lives between your devices and your iCloud account.

On the Mac you can optionally turn on a **YAML bridge** in Settings → Sync. Point it at a folder and Day Gaps mirrors every change as plain YAML on disk: one file per project, one per day, plus `areas.yaml`, `inbox.yaml`, and `scratchpad.md`. Edit the YAML in your editor and the bridge picks it up; edit in the app and the YAML rewrites. The CloudKit zone stays the source of truth.

The bridge is Mac-only. The iPhone reads CloudKit directly.

If you want the full schema (for an AI assistant, a custom script, or just curiosity), see the [AI assistant page](/ai/).

## Why a YAML mirror still matters

Three reasons.

**It's hand-editable.** You can fix a typo in Vim. You can paste a task into the right project with a text editor. You can ask Claude or ChatGPT to reorganize a project for you and apply the change directly to the file. The schema is meant to be operated by a person, not by a serializer.

**It diffs cleanly.** YAML lines up nicely in version control. If you keep your bridged folder in git, every change shows up as a small, readable diff.

**It survives.** Markdown files from a decade ago still open. YAML files from a decade ago still parse. CloudKit is convenient today; the plaintext mirror is what survives if Apple ever changes the rules.

## Syncing across devices

Day Gaps syncs through your private iCloud zone via CloudKit. Sign into the same Apple ID on each device and the data is there. No folder to configure, no cloud provider to choose, no permissions to grant beyond "use iCloud."

What this means in practice:

- **Mac and iPhone share state automatically.** A task ticked on the iPhone shows ticked on the Mac within seconds, usually faster. Same direction the other way.
- **Offline writes survive.** Each device keeps a local cache. If you tick a task on the plane, the change persists; iCloud picks it up when you land.
- **First launch is instant.** The local cache means the app opens to your full data without waiting for a network round-trip.

Sync timing is determined by Apple's silent-push pipeline. Most of the time it's effectively realtime. Occasionally a Mac that's been asleep takes a few seconds to catch up; the apps fall back to a periodic poll so even a missed push gets reconciled within a minute.

## Mac and iPhone together

Both apps read and write the same iCloud zone. The CloudKit records are the shared state.

What lives where:

- **Planning and structural work on the Mac.** Creating projects, archiving, renaming areas, scheduling reminders, the menu-bar timer, drag-reorder of sections, the calendar inspector. Things you do at a desk with a keyboard.
- **Last-minute replanning and capture on the iPhone.** Marking done, setting deadlines, rescheduling, focusing one gap, adding to the inbox between meetings. Things you do walking around.

The iPhone is read-mostly for project structure. Renaming or deleting a project, renaming or deleting an area, drag-reordering within an area: all happen on the Mac.

## Daily flow

On the Mac, **CMD-click** a gap header to arm the menu-bar timer for that gap. Pick a duration (25 / 45 / 90 minutes or custom). The menu bar shows the countdown. A gentle ping plays at zero. CMD-click the same gap header again (or use the menu-bar *End* item) to stop early. The timer has no pause: wall-clock time keeps moving whether you're paying attention or not.

On iPhone, **tap a gap's header** to enter focus mode for that gap. The other gaps hide, plus Carried Over and Anytime. The screen narrows to the block of time you're trying to live inside. Tap the focused header again to come back to the full day. There's no timer on the phone: the focus is the filter.

Two interpretations of "focus" for two different surfaces.

## Undo

Every destructive operation on the Mac (delete task, delete subtask, delete header, archive project, move project to Trash) shows a small **Undo toast** at the bottom-right for ten seconds. Press ⌘Z or click the *Undo* button to restore.

Only the most recent destructive operation is undoable. Once the toast disappears, the change is permanent.

iPhone undo is via the same swipe in reverse: re-tap a completed task to un-check it; if you rescheduled by accident, swipe again and pick the original date.

## Keyboard (Mac)

| Shortcut    | Action                                                              |
| ----------- | ------------------------------------------------------------------- |
| ⌘T          | Go to Today                                                         |
| ⌘\[          | Toggle the right pane                                               |
| ⌘⌃I         | Toggle the right pane (Apple's binding, also wired)                 |
| ⌘⇧N         | Open the current view in a new focused window                       |
| ⇧⌘N         | Add a gap divider on the Day view                                   |
| Space       | Add a task below the selected row (on the Project screen)           |
| Esc         | Exit edit mode / clear focus / cancel an inline form                |
| ⌘Z          | Undo the last destructive operation (while the toast is showing)    |
| ⌘?          | Open DayGaps Help                                                   |

The iPhone app has no keyboard shortcut layer; gestures cover the same territory.

## What's intentionally missing

**Recurring events.** If a task repeats, copy the gap's tasks forward by hand. The schema cost and edge-case UX of recurrence (skip, end-date, pause) don't earn their keep here.

**Per-task archive.** Tasks live or die with their project. Archive happens at the project level: archive a project and every task inside follows it.

**Start-of-day / end-of-day decorators.** The calendar shows gaps around midnight and that's fine. A gap at 1am means you have time, not that you have to fill it.

**Built-in Pomodoro counter or session history.** The menu-bar timer is just a countdown tied to one specific gap. If you want a Pomodoro app, use a Pomodoro app.

**Built-in moralizing about how you spend gaps.** DayGaps shows you the shape of your day. It doesn't tell you what to do with empty time.

**An online account.** There is no DayGaps login. The folder is the account. The sync provider is the sync.
