---
title: "Beta"
description: "DayGaps is in private alpha. Here's how to get in."
date: 2026-05-24
---

{{< brand >}} runs on Mac and iPhone. The Mac app is a universal binary on macOS 14 (Sonoma) and later. The iPhone app runs on iOS 17 and later, via TestFlight.

## Get the build

The current build is **v0.5**. It's ad-hoc signed and distributed as a zipped `.app` bundle from this site.

<p class="cta-row cta-row--inline">
  <a class="btn btn--primary" href="/downloads/DayGaps.zip">Download DayGaps 0.5 (.zip, 5.7 MB)</a>
  <a class="btn btn--ghost" href="mailto:daygaps@gmail.com?subject=DayGaps%20alpha%20feedback">Email about the build</a>
</p>

## Installing on Mac

1. Unzip the download. You'll get `DayGaps.app`.
2. Drag `DayGaps.app` into `/Applications`.
3. **First launch only:** right-click the app icon and choose **Open**. macOS will show an "unidentified developer" warning once because the build isn't notarized; clicking Open through that prompt clears it permanently. Subsequent launches work like any other app.
4. The app reads and writes plain YAML / Markdown in a folder you choose on first run. Dropbox, iCloud, Syncthing, or any local folder works.

Bundle identifier is `com.daygaps.app`, so installing a new build over an earlier one preserves your calendar permission and data-folder choice. If you change Macs, each new machine prompts once for Calendar access on first launch, then remembers.

## Installing on iPhone

The iPhone app is in TestFlight. To get added, email <a href="mailto:daygaps@gmail.com">daygaps@gmail.com</a> with the Apple ID you want to test under.

When you launch the iPhone app the first time it asks for the folder your data lives in. If you keep your folder in Dropbox, install the Dropbox iOS app first and mark the folder available offline. If you use iCloud Drive, no extra step is needed.

## What's in this build

This is alpha software. The data format is stable enough that the author trusts it for his own daily plans across multiple Macs, but keep a synced copy of your plans folder until you've decided to trust it too.

- Day view with named gaps, projects in the sidebar, and the calendar inspector
- Project pages with inline editing
- Inbox capture (right-pane only, by design)
- Standalone focus windows for any project, date, or area
- Variant-aware app icon (Default / Dark / Tinted) for macOS Tahoe Dock and Spotlight
- Plain-text storage: YAML day files, YAML project files, Markdown notebook
- Files live in any folder you point the app at (Dropbox, iCloud, Syncthing, etc.)

## Known gaps

The roadmap is on the [changelog page](/changelog/). Headline items still in flight:

- Some keyboard shortcuts are not yet wired into menu commands.
- Area deletion is intentionally restricted while the empty-only path is designed.
- A few advanced filters in the calendar inspector are placeholder.

## What we'd love feedback on

- Does the two-mode framing (overview vs. focus) match the way you actually work?
- Anywhere the chrome feels too loud at rest?
- Anywhere a feature feels like more work than it saves?
- Multi-Mac install: any odd file-sync behavior in the Dropbox / iCloud folder?

Send notes, bug reports, or rants to <a href="mailto:daygaps@gmail.com">daygaps@gmail.com</a>.
