---
title: "Changelog"
description: "What's shipped, and what's next."
date: 2026-05-12
---

<!-- Placeholder content seeded from project_daychunks.md. Update with each
     alpha gate. Don't link to internal-only docs from here. -->

## In flight (May 2026)

- Polishing inspector behavior across NavigationSplitView edge cases.
- Pinning empty-state copy for the inbox and area-default routes.
- Beta on-ramp materials (this site, TestFlight build notes).

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
