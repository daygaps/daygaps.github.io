---
title: "DayGaps on iPhone"
description: "The same gaps, the same files, on the device that's actually with you between meetings."
date: 2026-05-24
---

The iPhone app reads and writes the same folder as the Mac. Open it on the bus, between meetings, in line for coffee. The Today view shows the gaps you planned this morning. A few gestures let you bend the day when it bends on you.

## What's on the phone

A hamburger menu opens a sidebar. **Inbox**, **Today**, **This Week**, then each of your **Areas** with its projects nested underneath, then **Settings** anchored at the bottom. The badge on Inbox tells you what's piled up since last triage.

Today is the default view. It looks like the Mac's Today, in a single vertical column: a section per gap, tasks under each gap. Tap the title at the top to pop a date picker and walk forward or back without leaving the screen.

{{< figure src="/screens/ios/today.png" alt="The iPhone Today view, with named gaps across the day and tasks under each one" caption="The Today view on iPhone. Same data the Mac is reading." >}}

## Three gestures that do most of the work

DayGaps on iPhone uses the same vocabulary on every list of tasks, so the gesture you learned in Today still works in This Week and in a project.

**Tap a task** to mark it done. The checkmark flips immediately; the file is written in the background. If something goes wrong (rare), the row reverts and a small toast tells you.

**Swipe right** on a task to move it to a different gap on the same day. A sheet slides up with the day's gaps as a picker. One tap, and the task lands under the new gap.

**Swipe left** on a task to reschedule it. A date picker comes up. Pick a day, save. On a project view, swipe-left becomes *Assign date* for tasks that don't have one yet, or *Reschedule* for ones that do.

{{< figure src="/screens/ios/swipe-actions.png" alt="A task row showing the swipe-right Move and swipe-left Reschedule reveals" caption="The two halves of last-minute replanning: where it goes today, or which day it goes to." >}}

## Bending the day

Plans change. The bus was late. The meeting ran over. The morning you'd named *deep work* is now a fifteen-minute window and the rest of it is gone.

**Tap a gap's header** to open an editor: change the time, change the label, delete it. **Swipe left on the header** to delete the gap with a confirmation. Tasks that were under a deleted gap fall through to Anytime; nothing is lost.

**The floating bottom bar** has the right buttons for the screen you're on. On Today, that's *Add gap* and *Add to inbox*. On a project, *Add task* and *Add header*. On This Week, just *Add to inbox*. The bar floats above the safe area in a glass material, so the content behind it is still visible.

{{< figure src="/screens/ios/edit-gap.png" alt="The Edit Gap sheet on iPhone, with time picker and label field and a Delete button" caption="Gap CRUD on iPhone. Add a fresh gap, rename one in place, or drop one that no longer fits." >}}

## Capture, always one tap away

The bottom bar's *Add to inbox* button opens a single-field capture sheet. Type a line, save. The item goes into `inbox.yaml` in your folder; you triage it later, on the phone or on the Mac.

For direct-to-project capture (skipping the inbox), navigate to the project via the hamburger menu and use that screen's *Add task* button. Two taps instead of a destination picker. The same idea as on the Mac: the project's "+ Add task" lives inside the project.

{{< figure src="/screens/ios/capture.png" alt="The capture sheet on iPhone: one text field, save, cancel" caption="Capture lives in your pocket. Triage lives on the desk." >}}

## This Week, at a glance

Tap **This Week** in the sidebar to see the next seven days as sections. *Today · Sat, May 24*, *Tomorrow*, *Mon, May 26*, and so on. Each section lists what's scheduled for that day, with the gap time shown as a small pill next to the task.

Swipe left to reschedule. Tap to mark done. If nothing is scheduled all week, the view says so plainly.

{{< figure src="/screens/ios/this-week.png" alt="The This Week view on iPhone, showing seven days as scrollable sections" caption="A whole week of gaps, in your pocket." >}}

## What the phone doesn't do

Some things stay on the Mac on purpose.

- **Reminders and the gap timer.** Reminders fire on the device that scheduled them; the Mac is the canonical scheduler. The menu-bar countdown timer is a Mac feature.
- **Renaming or archiving projects, renaming or deleting areas.** Read-only on the phone. Structural changes happen at a desk.
- **Calendar integration.** The Mac reads your calendar to show events alongside gaps; the phone leans on the native Calendar app for that.

The line between the two devices is: planning and structural work on the Mac, last-minute replanning and capture on the phone. Both apps read and write the same folder, so the two views agree.

## Getting it

DayGaps for iPhone is on TestFlight alongside the Mac private beta. Email `daygaps@gmail.com` to be added.

When you launch the app for the first time, it asks you to pick the folder where your DayGaps files live. Dropbox, iCloud Drive, and any other Files-app-visible folder all work. If you keep your folder in Dropbox, install the Dropbox iOS app first and make sure the folder is marked available offline.
