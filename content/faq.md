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

DayGaps reads and writes plain YAML files inside a single folder. The Mac picks the folder via *Settings → Storage*; the iPhone picks it via the Files-app folder picker on first launch.

The structure is one file per project, one file per day, plus a top-level `areas.yaml`, `inbox.yaml`, and `scratchpad.md`. There is no database. There is no proprietary export format. If DayGaps disappears tomorrow, your data is still there in a format you can read with `cat`.

If you want the full schema (for an AI assistant, a custom script, or just curiosity), see the [AI assistant page](/ai/).

## Why YAML

Three reasons.

**It's hand-editable.** You can fix a typo in Vim. You can paste a task into the right project with a text editor. You can ask Claude or ChatGPT to reorganize a project for you and apply the change directly to the file. The schema is meant to be operated by a person, not by a serializer.

**It diffs cleanly.** YAML lines up nicely in version control. If you keep your DayGaps folder in git (some users do), every change shows up as a small, readable diff. The same applies to manual diffs across two Macs after a sync.

**It survives.** Markdown files from a decade ago still open. YAML files from a decade ago still parse. Proprietary task-app databases from a decade ago usually don't.

## Syncing across devices

DayGaps doesn't sync anything itself. Point the data folder at any cloud-synced location and the sync just happens. Tested setups:

- **Dropbox.** Works on Mac and iPhone. On the Mac, the folder must be marked **Always Keep on This Device** on each machine; otherwise files arrive as `.icloud`-style placeholders and the app reads them as empty. One-time setup per Mac.
- **iCloud Drive.** Works on Mac and iPhone. No special setup; the folder is always-local by default.
- **OneDrive, Box, Google Drive (with the desktop client), Syncthing.** Anything that exposes the folder through Finder on the Mac and through the Files app on iPhone works the same way.
- **Local-only.** Perfectly fine if you only use one machine. Pick a folder anywhere in your home directory and skip the cloud step.

Changes from another device show up in the running app within a few hundred milliseconds of the file landing locally. The Mac app watches the data folder for filesystem events and refreshes its views in place. The iPhone app re-reads on pull-to-refresh and on view appearance.

Latency depends on the provider. Dropbox typically lands within seconds; iCloud Drive is more variable. For capture-and-tick on the phone this is fine. If you mark a task done on iPhone and want the Mac to reflect it instantly, give the sync a moment.

## Mac and iPhone together

Both apps read and write the same files. There is no separate iPhone database, no companion sync protocol, no online account. The folder is the shared state.

What lives where:

- **Planning and structural work on the Mac.** Creating projects, archiving, renaming areas, scheduling reminders, the menu-bar timer, drag-and-drop into the calendar. Things you do at a desk with a keyboard.
- **Last-minute replanning and capture on the iPhone.** Marking done, moving a task to a different gap because the morning shifted, rescheduling, adding to the inbox between meetings. Things you do walking around.

The iPhone is read-mostly for projects (date-assign via swipe is the one write). Renaming or deleting a project, renaming or deleting an area, and reordering sections all happen on the Mac.

## Daily flow

Click a gap's header on the Mac to enter **Focus mode**: that gap pops to full opacity and the others fade. Click again or press Esc to exit. Focus is a viewing posture, not a setting; it doesn't persist across launches.

CMD-click a gap header to arm the **menu-bar timer** for that gap. Pick a duration (25 / 45 / 90 minutes or custom). A clock glyph appears on the focused gap; the menu bar shows the countdown. A gentle ping plays at zero. CMD-click the same gap header (or use the menu-bar dropdown's *End* item) to stop early.

The timer has no pause. Wall-clock time keeps moving whether you're paying attention or not. That's the whole point of pinning a gap to your day.

The timer is a Mac feature. On iPhone the day reads itself: tap a gap to enter it, do the work, tap done.

## Undo

Every destructive operation on the Mac (delete task, delete subtask, delete header, archive project, move project to Trash) shows a small **Undo toast** at the bottom-right corner for ten seconds. Press ⌘Z or click the *Undo* button to restore.

Only the most recent destructive operation is undoable. Once the toast disappears, the change is permanent (delete) or reversible only by hand-editing the file back (archive moves to `archive/{area}/`).

iPhone undo is via the same swipe in reverse: re-tap a completed task to un-check it; if you rescheduled by accident, swipe-left again and pick the original date.

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
