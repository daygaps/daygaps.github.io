---
title: "Get the app"
description: "DayGaps is in private TestFlight. Here's how to get in, and what v1.0 will cost."
date: 2026-06-10
---

{{< brand >}} runs on Mac and iPhone. The Mac app is a universal binary on macOS 14 (Sonoma) and later. The iPhone app runs on iOS 17 and later. Both ship through TestFlight.

## Request beta access

Internal TestFlight is invite-only. Email the Apple ID you want to test under and we'll add you. You'll get a TestFlight invitation by email within a day or two; install the **TestFlight** app from the App Store and tap **Accept** in the invitation.

<p class="cta-row cta-row--inline">
  <a class="btn btn--primary" href="mailto:daygaps@gmail.com?subject=DayGaps%20beta%20access&body=Apple%20ID%3A%20%0A%0ADevices%20(Mac%2FiPhone%2FiPad)%3A%20%0A%0AHow%20I%20plan%20today%3A%20">Request beta access</a>
  <a class="btn btn--ghost" href="mailto:daygaps@gmail.com?subject=DayGaps%20feedback">Send feedback</a>
</p>

## Installing on Mac

Once accepted:

1. Open the **TestFlight** app on your Mac (App Store has it).
2. Sign in with the Apple ID you sent us.
3. **DayGaps** appears in the list. Tap **Install**.

The build arrives signed and notarized through Apple's TestFlight pipeline, so it installs and opens like any App Store app.

## Installing on iPhone

Same flow. Install the TestFlight app from the App Store, sign in, install DayGaps.

No folder picker on first launch. The phone signs into your iCloud account automatically; your data syncs from the Mac across iCloud in the background.

## What's in this build

The current build is **v0.6**. Universal Mac + iPhone + iPad, syncing through your private iCloud zone. The full feature surface is on the [changelog](/changelog/); the short version:

- Today, This Week, Deadlines, Anyday, Inbox, Areas, Projects, Settings, all native on iPhone.
- One gesture vocabulary across every list: tap for done, leading swipe for deadline, trailing swipe for reschedule, long-press for move.
- iCloud sync end to end. Local cache for offline writes.
- Mac focus mode is a Pomodoro timer in the menu bar. iPhone focus mode is a visual filter on Today. (Different shapes for different surfaces.)
- Optional YAML bridge on Mac for a plaintext mirror of your data.

This is beta software. The format is stable and {{< brand >}} now runs the author's actual daily plans, but TestFlight is the right venue for it until external review is done.

## When v1.0 ships

{{< brand >}} will be a **one-time purchase** on the App Store. All updates through the 1.x series are included, and there is no subscription. The launch opens with a reduced back-to-school price, timed for the season when days fill up with fixed commitments and the gaps between them start mattering.

{{< button href="/pricing/" >}}See what it costs{{< /button >}}

Beta testers will be the first to know; everyone else can watch this page or the [changelog](/changelog/).

## Known gaps

The roadmap is on the [changelog page](/changelog/). Items still in flight:

- Some keyboard shortcuts are not yet wired into menu commands on Mac.
- Area deletion is intentionally restricted while the empty-only path is designed.
- iPhone drag-reorder on Today is parked while the swipe vocabulary settles.

## What we'd love feedback on

- Does the two-mode framing (overview vs. focus) match the way you actually work?
- Anywhere the chrome feels too loud at rest?
- Anywhere a feature feels like more work than it saves?
- Sync timing across devices: does an edit on the Mac surface fast enough on the iPhone, and vice versa?
- Anywhere a Mac idiom leaked into the iPhone or the iPhone idiom leaked back to Mac?

Send notes, bug reports, or rants to <a href="mailto:daygaps@gmail.com">daygaps@gmail.com</a>.
