---
title: "Changelog"
description: "What's shipped, and what's next."
date: 2026-05-24
---

## v0.5 · May 24, 2026

The first release that ships on two platforms. Mac picks up everything from the v0.3 and v0.4 cycles plus a menu-bar timer and an in-app Help sheet. iPhone enters preview alongside it: capture, Today, This Week, and the swipe gestures that make last-minute replanning feel native to the phone.

### iPhone preview (new)

- **iPhone app on TestFlight.** Email <a href="mailto:daygaps@gmail.com">daygaps@gmail.com</a> with the Apple ID you want to test under. Built for iOS 17 and later. Reads and writes the same folder as the Mac, via the Files-app folder picker; Dropbox, iCloud Drive, and anything else that exposes a folder works.
- **Hamburger sidebar.** Inbox (with a count badge), Today, This Week, then each Area with its projects nested underneath, then Settings anchored at the bottom.
- **Three gestures, one vocabulary.** Tap a task to mark it done. Swipe right to move it to a different gap on the same day. Swipe left to reschedule. The same gestures work in Today, in This Week, and inside a project view.
- **Gap CRUD on iPhone.** Tap a gap header to edit time / label / delete. Swipe left on a header to delete with confirmation. The bottom bar's "+ Add gap" pre-fills the next half-hour after the latest existing gap.
- **Floating-glass bottom bar.** Per-screen contents: Today gets *Add gap* and *Add to inbox*; project views get *Add task* and *Add header*; This Week gets *Add to inbox* only.
- **Single-field capture.** The inbox button opens a one-field sheet with autofocus. Type, save, the line lands in `inbox.yaml`. Triage on the Mac or on the phone later.
- **Project date-assign.** Swipe left on a project task is "Assign date" if it doesn't have one yet, "Reschedule" if it does. Stays read-only on structural project edits (rename, archive); those remain Mac-only.

### Mac changes since v0.2

- **Menu-bar timer.** CMD-click a gap header to arm a countdown for that gap. 25 / 45 / 90 / custom; a gentle ping at zero; CMD-click again or use the menu-bar *End* item to stop early. Wall-clock time, no pause.
- **In-app Help sheet.** ⌘? opens the same content that mirrors on this site's FAQ. The in-app version is the source of truth.
- **Undo toast for destructive operations.** Delete task, delete subtask, delete header, archive project, move project to Trash all surface a ten-second undo at the bottom-right. ⌘Z or the toast button restores. Only the most recent op is undoable.
- **FolderWatcher.** Cross-Mac live refresh via FSEvents. Changes from another machine appear within a few hundred milliseconds of the file landing locally. No polling, no refresh button.
- **Gap reminders.** Right-click a gap header to mark it `reminder: true`. A macOS notification fires at the gap's wall-clock time on every day it exists in the rolling seven-day window. Silent banner, exact-time.
- **Area rename and color picker.** Edit-area sheet rewrites the area name in place and lets you pick a color from the standard set. The folder on disk stays code-named; the displayed label updates.
- **Folder and subfolder rename.** Same in-place rename for project folders and the one allowed level of subfolder grouping.
- **Per-app font scale.** Custom slider in Settings; the app overrides macOS's per-app dynamicTypeSize miss with an injected env that all the typography styles read.
- **Today-gaps in the reschedule popover.** "Today @ HH:mm" pills underneath the calendar, so picking a date and a gap is one click.
- **Task migration on gap rename.** Renaming a gap's time updates every task that was assigned to the old time, so the schedule doesn't drift.
- **Archive empty-state on leaf routes.** Empty area or empty project pages now read as deliberate rest rather than missing content.
- **Section drag-reorder.** Drag a section header within a project to reorder. (Known issue: persistence is unreliable across some launches; workaround is to hand-edit the project YAML. Tracked.)
- **Rename to DayGaps.** All "chunks" / "DayChunks" references swept to "gaps" / "DayGaps". Backward compatibility for legacy YAML keys is in the loader, so existing folders continue to read without manual conversion.

## v0.2 · May 15, 2026

First build published from this site as a downloadable `.app` bundle.

- **Variant-aware app icon.** Default, Dark, and Tinted PNGs compile into a single asset catalog that macOS Tahoe consumes for per-appearance Dock and Spotlight rendering. Replaces v0.1's single-variant flow, where the icon was auto-desaturated to a "grayish ghost" in tinted contexts.
- **Standalone `.app` packaging.** A `Packaging/pack-app.sh` script produces `DayGaps.app` directly from the SwiftPM source. No Xcode project to maintain in parallel. Bundle is ad-hoc signed; first launch on a new Mac needs right-click → Open to clear Gatekeeper.
- **Multi-Mac install pattern.** Bundle identifier (`com.daygaps.app`) is stable across machines, so calendar permission and the data-folder choice persist when you drag a new build over an old one. Each Mac prompts once for Calendar access, then remembers.
- **Calendar permission key shipped.** `NSCalendarsFullAccessUsageDescription` is now in the bundle Info.plist; the calendar inspector can actually request access from inside the packaged app (which `swift run` builds couldn't).

## In flight

- Polishing inspector behavior across NavigationSplitView edge cases.
- Pinning empty-state copy for the inbox and area-default routes.
- Distribution path for non-self users (Developer ID + notarization). Parked until the private alpha cohort outgrows ad-hoc signing.

## Alpha · April 28, 2026

- Multi-window shipped. Right-click any project, date, or area → "open in new window." Standalone windows hide the sidebar and inspector by design.
- Area reordering regression fixed (sidebar drag now restores correctly after a relaunch).

## Alpha · April 20, 2026

- Self-backlog project retired; treat the `p-2d3931.yaml` file as sample data.
- Sidebar wordmark updated to **DayGaps** (formerly **DayChunks**) ahead of a full rename.

## Alpha · April 17, 2026

- Area-default hidden project ships. One-off tasks now route to a per-area `_default.yaml` instead of requiring a real project.
- Sort rule inside a chunk fixed in stone: group by project → area display order → filename → YAML order. No drag-to-reorder.

## Pre-alpha

- Plain-file substrate (YAML days + projects, Markdown notebook) finalized as the storage model.
- Two-mode framing (planning vs. executing) baked into the design doc.
