---
title: "DayGaps on iPhone"
description: "The same gaps, the same data, on the device that's actually with you between meetings."
date: 2026-06-10
---

The iPhone app reads from your iCloud zone. Open it on the bus, between meetings, in line for coffee. The Today view shows the gaps you planned this morning. A few gestures let you bend the day when it bends on you.

## What's on the phone

A hamburger sidebar opens to the same destinations the Mac has. **Today**, **This Week**, **Deadlines**, **Anyday**, **Inbox**. A **Pinned** section for projects you've chosen to keep at the top. Each of your **Areas**, with their projects nested underneath. **Archives** and **Settings** anchored at the bottom. The brand wordmark sits at the very top.

Today is the default view. Same gaps the Mac is reading, in a single vertical column: a section per gap, tasks under each gap. Your calendar events appear alongside the gaps, a gap that overlaps an event is tinted to show it, and when the tasks on screen carry `#tags`, filter chips surface at the top, same as the Mac.

{{< appview device="iphone" mode="all" caption="The Today view on iPhone. Same data the Mac is reading, sized for your thumb." >}}

## Four gestures, same vocabulary everywhere

{{< brand >}} on iPhone uses the same gesture vocabulary on every list of tasks, so the gesture you learn in Today still works in This Week, in Deadlines, in Anyday, in an Area, in a project.

**Tap a task** to mark it done. The checkmark flips immediately and the strikethrough lands; the change syncs to iCloud in the background.

**Leading swipe** (drag right) sets the deadline. A calendar slides up; pick a day, save.

**Trailing swipe** (drag left) opens Reschedule. The same sheet lets you change the day AND pick which gap on that new day in one motion. (On the Mac these are two clicks; on the phone they collapse into one swipe + one tap.)

**Long-press** opens "Move to project." An area-grouped picker comes up; pick a destination project (or an area's General bucket), the task moves.

## Focus on one gap

Plans crowd up. The morning you'd named *deep work* now looks like a stack of mid-morning interruptions and your eye keeps drifting to them.

**Tap a gap's header** to focus that gap. The other gaps hide. Carried Over and Anytime hide. The screen narrows to the block of time you're actually trying to live inside. Tap the focused header again to come back to the full day.

(On the Mac, focus is a Pomodoro timer in the menu bar. Phones don't have menu bars, so iPhone focus does what a phone is good at instead: filtering the screen.)

## Bottom bar, contextual

The floating bottom bar carries the right buttons for the screen you're on. On Today, that's a quick-jump to today, a coral capture (+) for inbox, and a tray to open the inbox itself. The bar floats above the safe area in a glass material so the content behind stays visible.

## This Week, vertical

Tap **This Week** in the sidebar to see the next seven days as scrollable sections. *Today · Sat, May 30*, *Tomorrow · Sun, May 31*, *Mon, Jun 1*, and so on. Each section lists what's scheduled for that day. Today's section title reads in coral so your eye lands there first.

A work-week toggle in the trailing menu hides Sat / Sun if Mon-Fri is the week you actually want to see. Setting persists.

(Mac's This Week is horizontal columns side-by-side. iPhone's is a vertical list. Same data, different shape per platform.)

## Inbox is a pile, not a queue

Inbox items carry no date, no gap, no project. Just a title and a capture timestamp. Triage is the verb that moves an item into the right place.

Tap an inbox row, or swipe right, and an area-grouped picker appears: General buckets per area on top, projects under each. Pick a destination, the item becomes a task in that place and disappears from the inbox.

Swipe left on a row to delete the item outright. Long-press for the same actions in a menu.

## What the phone doesn't do (on purpose)

- **The Pomodoro timer.** Mac feature. Focus on iPhone is the visual filter described above.
- **Renaming and archiving projects.** Structural surgery on a project happens at a desk; the phone reads the results.
- **YAML bridge.** Mac-only. If you want a plaintext copy of your data on disk, open the bridge on the Mac; the phone reads CloudKit directly.

The line between the two devices is: planning and structural work on the Mac, last-minute replanning and capture on the phone. Both apps read and write the same iCloud zone, so the two views agree.

## On the bench

A Home Screen widget is in the works: your nearest gap and its tasks at a glance, with the count of anything due. It will arrive when it earns its place.

## Getting it

{{< brand >}} for iPhone is on internal TestFlight alongside the Mac beta. Both ship together.

[Request beta access →](/beta/)

When you accept the TestFlight invitation, the app installs like any other TestFlight build. On first launch it signs into your iCloud account automatically: there is nothing to configure and no permission to grant beyond iCloud itself. If you've also installed the Mac app on the same iCloud account, your data is already there.
