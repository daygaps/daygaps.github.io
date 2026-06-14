---
title: "FAQ"
description: "Common questions about how DayGaps works, what's intentionally missing, and how to set things up."
date: 2026-06-10
---

This page mirrors the **DayGaps Help** sheet inside the Mac app (open from the Help menu, or press ⌘?). If something here is out of sync with what the app shows, the in-app version is the source of truth.

## Gaps

A **gap** is a chunk of time between calendar commitments, the part of the day you actually have to spend. The Day view shows your gaps as horizontal sections, each with a time label and an optional name.

To add a gap, click the inline *+ Add gap* button just above the day's footer, or press ⇧⌘N. To edit a gap, right-click its header for rename, delete, or set-reminder. A reminder fires a macOS banner at the gap's wall-clock time on every day it exists in the rolling seven-day window.

A gap has a start time and no end time. The app derives the most a gap can hold from where the next fixed thing begins, the next gap or the next calendar event, and shows it with the gap's header. Change the plan and the math follows.

A gap whose start time falls inside a calendar event renders with a background tint. The tint states the overlap and nothing more; whether that means work-during-the-seminar, an agenda for the meeting, or last-minute prep is your call. See [Concepts](/concepts/) for the full gap model.

On iPhone, tap the gap's header to open the same editor. Swipe left on a gap header to delete it.

## DayGaps and your calendar

The relationship is read-only, in one direction, by your choice. You pick which calendars {{< brand >}} can see; it reads their events on-device and writes nothing back. Your calendar app, and whatever system or obligations come with it, stays exactly as it is.

The per-calendar choice earns its keep quickly. Many people keep a calendar of events they only need to know about, kept visible to a workplace scheduler so the time reads as blocked. Leave that one out and let the calendars you act on come through: the events that shape your gaps are the ones that actually claim you.

What the events buy you inside {{< brand >}}: a map of the day's fixed posts drawn alongside your gaps, a live list of the true open stretches between events (click one to claim it as a named gap starting at that time), the derived maximum each gap can hold, and the tint on any gap that sits inside an event. All of it is recomputed as the day changes, so nothing goes stale when a meeting moves.

## Scheduling tasks

Every task can be **dated**, **gap-assigned**, **both**, or **neither**. Dating puts the task on a day; gap-assigning slots it into a specific gap. Tasks without a date are *Anyday* (no day assigned yet); tasks with a date but no gap are *Anytime* on that day.

To reschedule on the Mac, click the calendar glyph on any task row. The popover offers a calendar and, for today, a row of "Today @ HH:mm" gap pills so you can pick the date and the gap in one click.

On iPhone, the trailing swipe (drag left) opens Reschedule, one sheet for picking the new day and the gap on that day. The leading swipe (drag right) sets a due date instead; the two swipes cover the two dates a task can carry.

Drag-and-drop also works on the Mac:

- From the inbox onto a project or onto a day cell on the month calendar.
- From one gap's row onto another gap's header within the same day, to re-assign the task.

## Scheduled vs due

**Scheduled** is when you plan to do a task: a day, optionally a gap. **Due** is when it must be done. They are independent fields; a task can carry both, either, or neither.

Due dates are deliberately loud where scheduling is quiet: an arriving deadline turns red, the Deadlines view collects every dated commitment, and Today shows a DUE chip counting tasks due or overdue. The chip appears only when the count is above zero, so seeing it means something. Rescheduling a task is an everyday act; a due date is a commitment. [Concepts](/concepts/) covers the model in full.

## Carried over

A scheduled task you didn't finish shows at the top of Today as **Carried over** the next day. Carried over is calm on purpose: it means yesterday's plan had more in it than yesterday did, which is information, and common. Do the task, or reschedule it into a day with room.

Due dates are the separate, loud channel. A carried-over task without a due date never turns red.

## Tags

Write `#tag` anywhere in a task's title and it's a tag. When the page you're viewing contains tagged tasks, the tags appear as filter chips at the top; tap one to filter the page to it.

Tags are derived from the tasks in front of you each time and stored nowhere. There's no tag registry to maintain and no rename ceremony: edit the text and the tag follows, delete the last occurrence and the tag is gone. Matching is exact-string and deliberately dumb, which is what makes tags free to invent and free to abandon.

## Where your data lives

{{< brand >}} stores areas, projects, tasks, headers, gaps, days, and inbox items in your private CloudKit zone. There's no shared backend, no {{< brand >}} server: the data lives between your devices and your iCloud account.

On the Mac you can additionally use the **YAML bridge**. Open the bridge, pick which areas are in scope, and the app writes them to a folder as plain YAML, one file per project plus your inbox, then locks itself while you (or your AI, or your scripts) edit the files. Check the bridge back in and the app takes the YAML as the new truth for everything in scope. Every session starts with a backup, and the last several backups are kept.

The bridge is Mac-only. The iPhone reads CloudKit directly.

If you want the full schema (for an AI assistant, a custom script, or just curiosity), see the [AI page](/ai/) and the [bridge protocol](/ai-bridge-protocol/).

## Why the YAML bridge matters

Three reasons.

**It's hand-editable.** You can fix a typo in Vim. You can reorganize a whole project with your editor's block moves. You can ask Claude or ChatGPT to triage your inbox and apply the change directly to the files. The schema is meant to be operated by a person, not by a serializer.

**It diffs cleanly.** YAML lines up nicely in version control. If you keep your bridge folder in git, every check-in shows up as a small, readable diff.

**It survives.** Markdown files from a decade ago still open. YAML files from a decade ago still parse. CloudKit is convenient today; the plaintext copy is what survives if anything ever changes the rules.

## Syncing across devices

{{< brand >}} syncs through your private iCloud zone via CloudKit. Sign into the same Apple ID on each device and the data is there. No folder to configure, no cloud provider to choose, no permissions to grant beyond "use iCloud."

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

The iPhone is read-mostly for project structure. Renaming or deleting a project, and other structural surgery, happens on the Mac.

## Sharing a project

A project can be shared with other people through iCloud. Participants see the shared plan: the project's name and purpose, its sections, its tasks and their order, what's done, the project deadline, and every task's due date.

Scheduling stays personal. Which day and which gap you put a task into, what you pin, and what you collapse are your own state, invisible to the people you share with. The plan is common ground; the days are yours. [Concepts](/concepts/) has the full picture.

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

**An online account.** There is no DayGaps login. Your iCloud account is the only account involved, and we never see it.

## What it costs

{{< brand >}} is a one-time purchase on the App Store. All updates through the 1.x series are included, and there is no subscription. The launch will open with a reduced back-to-school price.

## What's coming

A Home Screen widget for iPhone: your nearest gap and its tasks at a glance, plus the count of anything due. It ships when it's ready; the [changelog](/changelog/) is where shipped things are announced.
