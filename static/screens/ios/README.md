# iOS screens

Screenshots from the DayGaps iPhone app, referenced from the landing
page and from `content/ios.md`. Hugo serves anything in `static/` at
the site root, so a file here at `static/screens/ios/foo.png` is
reachable at `/screens/ios/foo.png`.

## Expected files

| Path                      | Used by                              | Description |
|---------------------------|--------------------------------------|-------------|
| `today.png`               | landing iOS teaser + ios.md          | Today view on iPhone, 4-5 gaps with named tasks under each one. The bread-and-butter shot. |
| `swipe-actions.png`       | ios.md                               | A task row mid-swipe, showing both the swipe-right "Move" reveal (blue, leading edge) and the swipe-left "Reschedule" reveal (purple, trailing edge). One swipe at a time per screenshot if showing both is too busy; in that case capture two and combine, or pick the more demonstrative one. |
| `edit-gap.png`            | ios.md                               | The Edit Gap sheet, pre-filled with an existing gap's time and label, Delete button visible. |
| `capture.png`             | ios.md                               | The capture sheet with the single text field, autofocused, with a sample line being typed. |
| `this-week.png`           | ios.md                               | The This Week view showing a few days as sections, gap times as pills on the rows. |

## Capture notes

- Use the marketing data folder (see `daygaps-marketing-gen/`) so the content matches what the Mac screenshots show.
- Capture on iPhone hardware if possible; the iOS Simulator works as a fallback but the simulator's status bar reads `9:41` and is fine to leave in place (Apple's marketing default).
- Light mode for capture; the site renders dark variants via CSS.
- 3x density (export at actual pixel density; let CSS do the downscaling).
- PNG. If a capture lands over 400KB, run it through `pngquant` before committing.
- Same transparent-margin treatment as the Mac shots in the parent folder works well: leave breathing room around the device chrome.
- If a screenshot file is missing, the page still renders. The figure shows a broken-image placeholder until the file is in place.

## Capture order suggestion

1. `today.png` first; it's the most-used and informs how the other screens read.
2. `this-week.png` (sidebar route from Today).
3. `capture.png` (tap the inbox button from Today's bottom bar).
4. `edit-gap.png` (tap a gap header in Today).
5. `swipe-actions.png` last; this one usually needs a couple of tries.
