---
title: "Philosophy"
description: "Why Day Gaps exists, and how it's meant to be used."
date: 2026-05-12
---

Day Gaps grows from a small set of principles. Each design choice in the app traces back to one of them.

## The gap is the unit of value

A "gap" is a window of time between meetings where you can actually get something done. Day Gaps treats the gap as the unit of value. **The list is housekeeping. The gap is the precious thing.** Every surface of the app exists to help you make the most of every gap, and to stay out of your way the rest of the time.

Two corollaries follow:

1. **Planning and executing are different activities.** They want different surfaces, different chrome, and different attention.
2. **The chrome that helps planning hurts execution, and vice versa.** A single all-purpose layout serves neither cleanly.

## Two modes

### Planning mode

You're at the start of the day, or Sunday morning, or a planning session at the end of the day. You need to *see*: what's happening this week, which projects are due, what's overdue, what's parked, which gaps are coming. You move things around. You assign dates, drag tasks, archive what's done, surface what's been buried.

This is what the main window is for. Sidebar, calendar inspector, drag-and-drop, search — all of it. The user is the conductor.

### Executing mode

You've decided what you're doing in this gap. The day's plan is set. You don't need to see other gaps; they're a distraction. You don't need the calendar; you already know the time. You need to see *one thing* — the thing in front of you — and work on it.

Two flavors:

- **In-window focus.** Click a chunk in the day view and it rises; the rest of the window quiets down. Click again or press <kbd>Esc</kbd> to come back.
- **Standalone focused window.** Right-click any view and "open in a new window." The new window contains just that view's content. No sidebar. No inspector. No way to navigate to other projects or other dates from inside. To switch, you close the window and pick a different one in the main app. **The friction is the feature.** It stops you from drifting.

Both are user-initiated. There is no auto-focus on "current time" — that assumes you're doing what you planned, which you often aren't. You decide when to leave overview mode and when to come back.

## What follows from this

- **The main window is the source of truth.** Standalone windows are read+write views into the same data.
- **Standalone windows have no escape hatches.** Adding side panels would defeat the discipline.
- **Chrome is biased toward executing.** When the choice is between inline and context-menu, pick the one that keeps the row visually quietest at rest. Hover-revealed icons over always-visible buttons; right-click for infrequent actions; almost nothing visible always.
- **Minimal overhead.** A task carries a one-line caption and a checkbox. Substantive prose belongs in the Lab Notebook, where there's room for it. Time spent in the app is time looking at what to do next — not time grooming the app itself.

## Plain files

Your day is a YAML file. Your notebook is Markdown. They live in your own Dropbox / iCloud / Syncthing folder. There is no proprietary database. You can read your data with `cat`. You can edit it in Vim. When Day Gaps eventually goes away — and it will, everything does — your data is still on your disk and still useful.

This also makes the app a good citizen for an AI collaborator: you can hand a project YAML to Claude and ask for help untangling it, and Claude can read and edit the files directly. The plain-file model exists partly so the app is meant to be operated *with* an AI, not despite one.

## Reuse

This philosophy generalizes beyond Day Gaps. "Overview vs. work" is the central tension in any productivity surface — task managers, dashboards, IDEs, knowledge bases. The two-mode model + user-initiated focus + plain files as substrate is a transferable pattern. The specific design choices in the app are downstream of these principles.
