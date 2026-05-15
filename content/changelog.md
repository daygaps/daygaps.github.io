---
title: "Changelog"
description: "What's shipped, and what's next."
date: 2026-05-15
---

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
