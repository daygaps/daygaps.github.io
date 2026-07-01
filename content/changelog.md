---
title: "Changelog"
description: "What's shipped, and what's next."
date: 2026-05-30
---

## v1.0.1 · June 30, 2026

The 1.0 release candidate. The headline is sync: DayGaps now shows you exactly what iCloud is doing and protects your edits when two devices disagree. Around that, a long polish pass tightens planning on the phone and the small visual details on both platforms.

### Sync you can see, and trust (new)

- **A sync status row on both platforms.** The Mac sidebar floor and the iPhone Today footer show a health dot and a plain caption: "Synced 2m ago · 142 records" when all is well, "Saving 3 changes…" while writes are in flight, amber when something needs attention. Tap it for the details.
- **Refresh from iCloud.** A new Settings action (with a matching File-menu item on Mac) rebuilds the local copy from what is actually on iCloud, without touching the server. It refuses when a bridge session is open or when you still have unsent changes waiting, so a refresh can never quietly discard work.
- **Your edits are protected when devices disagree.** If two devices change the same task, the one that loses the race now tells you so, "An edit to 'X' was overwritten by another device. Check it and re-do if needed," instead of silently dropping it. Offline edits are guarded against being overwritten when a device reconnects.
- **Records by type.** Settings → iCloud Sync Status expands to show how many Areas, Projects, Tasks, and Gaps iCloud is holding, so a sync question is something you can look at rather than guess at.
- **Diagnostics export.** One tap writes a metadata-only report (versions, counts, status, file sizes, and deliberately no task titles or area names) to send with a bug report. A test keeps that privacy invariant in place.
- **The phone keeps itself current.** iPhone now refreshes every 60 seconds while it is open, closing the old lag where a change on the Mac took a while to appear on the phone.

### Planning on iPhone

- **A pull-up planner.** The calendar planner card is now a bottom sheet that rests as a pill under Today and rises when you pull it up, so your tasks own the screen until you want the calendar.
- **A permanent Today button** in the top-right, always one tap from the current day.
- **Tap a section header to collapse it,** the same quiet gesture the Mac has.
- **Enter starts the next task** instead of inserting a line break, so capturing a list is one keystroke per item. A new task with a subtask renders already open.
- **Ephemeral tag chips are back** on Today, and in-list reordering is fixed.

### Focus and finish

- **A clearer focused gap.** The gap you are working in is marked by a coral underline and a bolder heading rather than a filled pill: quieter, and easier to read.
- **One consistent glyph family.** Projects, areas, and the rest now draw from a single stock SF Symbols set instead of a custom one, so the app looks native at every size. Anyday picks up a cleaner mark.
- **Live links in task titles.** Phone numbers, URLs, and email addresses in a title are detected and underlined; tapping one opens it, and a tap on a link never triggers a rename.

### Mac

- **Undo an accidental delete.** Cmd+Z brings back a task you just deleted (one level).
- **Tap any day in the calendar** to see that day's gaps and events.
- **Click an inbox item to triage it** straight away.
- **Selection reaches the bottom bar,** so scheduling and deadlines apply to a multi-selection in one move.
- **Toolbar cleanup.** The title-bar chrome is quieter and better aligned, and the sidebar toggle returns to the native control.

### Under the hood

- **Swift 6.** The codebase moved to the Swift 6 language mode and strict concurrency. Invisible day to day, but it pays off in fewer subtle timing bugs, especially around rapid edits and sync.

## v0.6 · May 30, 2026

The release where DayGaps becomes a real two-device product. Sync stops being "open the same Dropbox folder on every Mac" and becomes iCloud, end to end. The iPhone app stops being a preview and becomes the whole app, screen for screen. The visual language across both platforms tightens into one set of glyphs, one palette, one rhythm.

### iCloud sync, end to end (new)

- **CloudKit replaces shared-folder.** Areas, projects, tasks, headers, gaps, days, and the inbox now live in your private CloudKit zone. Changes flow between Mac, iPhone, and iPad through Apple's silent-push pipeline. No Dropbox needed, no Files-app picker on first launch.
- **Local cache for offline.** Every device keeps a Codable snapshot of the records it has seen, so first launch is instant and offline writes survive a relaunch. The sync engine replays those writes when the device sees iCloud again.
- **Optional YAML bridge on Mac.** When you want your plans as plaintext (for editor access, version control, an AI session, or a paranoia backup), open the bridge: pick the areas in scope, the app writes them to a folder as YAML and locks itself, you edit, you check in. The YAML you check in becomes the new truth for what's in scope, and every session starts with a backup. CloudKit stays the source of truth between sessions.

### iPhone app, full surface (new)

The phone is no longer a capture-plus-Today preview. Every sidebar destination has its own native screen.

- **Today, This Week, Deadlines, Anyday, Inbox, Areas, Projects, Settings** all rendered for iPhone instead of falling back to a scaled-down Mac layout.
- **One gesture vocabulary across every list.** Tap a task to mark it done. Leading swipe sets the deadline. Trailing swipe opens Reschedule (pick a new date and a gap on that day in one sheet). Long-press surfaces "Move to project." Same four gestures in Today, Project, This Week, Anyday, Area.
- **Focus mode on Today.** Tap a gap header to focus that gap. Every other gap, plus Carried Over and Anytime, hide. Tap the focused header again to come back. (The Mac's focus is a Pomodoro timer in the menu bar; the phone has no menu bar, so focus there is a visual filter instead.)
- **Floating-glass bottom bar.** Today, capture, and inbox triage live there; the rest of the surface area belongs to your tasks.

### Visual language pass

- **Sidebar glyphs match across Mac and iPhone.** Today is a dynamic day-of-month calendar mark. This Week is the split-rectangle on Mac, an ellipsis-calendar on iPhone (both reading as "horizontal stretch of week"). Deadlines is a flag. Anyday is the infinity loop. Inbox is the tray-with-arrow.
- **One glyph for projects, tinted by area.** Every project row, in the sidebar and inside the area view, uses the same `app.badge.checkmark` mark (a container of check-able items) colored with its parent area's tone. Pinned projects keep the same glyph; they're recognized by living in the Pinned section, not by a different mark.
- **One fixed glyph for areas.** Each area carries the same stacked-squares mark; only the color is yours to choose. (Color is the signal that actually carries information at a glance; per-area glyph variety doesn't earn its keep when the name is always next to it.)
- **Two-tone wordmark, tighter.** The y-tail of "Day" now fully interlocks with the bowl of "G" in "Gaps". Identical on the app and on this site.

### Mac changes

- **Sidebar restructure.** Today, This Week, Deadlines, Anyday, Inbox at the top; Pinned section always visible; Areas with disclosure-grouped projects; Archives at the bottom; brand wordmark anchored beneath. The wordmark now appears at the **top** of the iPhone sidebar: same component, mirrored placement that fits each platform's chrome.
- **Local persistent cache, instant launch.** No more multi-second wait staring at empty sidebar lists on cold start.
- **Reset all data button** in Settings → Data. Wipes the CloudKit zone and the local cache when you need to start clean.
- **Sync diagnostics in Settings.** Cached record count, last fetch result, last write result, plus a Sync now button. So when a sync hiccup happens it's something you can look at instead of guess at.

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

- Plain-file substrate (YAML days + projects, Markdown scratchpad) finalized as the storage model.
- Two-mode framing (planning vs. executing) baked into the design doc.
