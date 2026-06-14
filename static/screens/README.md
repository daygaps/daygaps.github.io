# Screens

Product screenshots referenced from content pages. Hugo serves anything in
`static/` at the site root, so a file here at `static/screens/foo.png` is
reachable at `/screens/foo.png`.

The iPhone shot list lives one level down in `ios/`.

## Refresh note (2026-06-10)

All existing Mac screenshots predate the flat printed-paper visual overhaul
and the OVERDUE-red treatment, and were captured against the retired
Dropbox-era data generator. Recapture the full Mac set alongside the iPhone
set in the next screenshot session, against live or freshly designed sample
data (the old `daygaps-marketing-gen/` generator was retired 2026-06-03;
a new data plan is needed before the session).

Two shots were dereferenced from content during the v1.0 site revamp
because the files never existed: `planning-week.png` (patterns, "Sunday
evening") and `inbox.png` (patterns, "Capturing mid-day"). When recaptured,
both scenes in `content/patterns.md` would benefit from getting their
figures back. New shots worth adding to the list while capturing: the
event-overlap tint on a gap, the DUE chip on Today, and the bridge diff
sheet for the AI page.

## Expected files

| Path                  | Used by                              | Description |
|-----------------------|--------------------------------------|-------------|
| `project.png`         | philosophy.md                        | The "Q2 paper draft" project (matching the YAML in philosophy.md) opened in DayGaps. |
| `today.png`           | landing (scene 2) + philosophy + patterns | Today view showing several named gaps across the day with their tasks visible. The bread-and-butter shot of the app. |
| `focus.png`           | landing (scene 1) + philosophy + patterns | Main window with a single gap focused and the others visibly muted. Shows the in-window click-to-focus gesture. |
| `standalone.png`      | landing (scene 3) + philosophy + patterns | A standalone gap window: just one gap and its tasks, no sidebar, no inspector. Right-click-and-open-in-new-window result. |
| `planning-week.png`   | (currently dereferenced; patterns "Sunday evening") | A view of the week being planned: calendar inspector visible, multiple days with named gaps across them, tasks pulled into the gaps. The planning surface in full chrome. |
| `inbox.png`           | (currently dereferenced; patterns "Capturing mid-day") | The inbox in the right pane, with a few captured one-line items in it. Show the small entry field if it's visible during capture. |

## Capture notes

- Use the app's default light theme; the site renders dark variants via CSS.
- 2x retina (export at actual pixel density; let CSS do the downscaling).
- Trim window chrome unless the chrome itself is meant to be part of the screenshot.
- Save as PNG. If the file ends up over 300KB after capture, run it through `cwebp` or `pngquant` before committing.
- Same transparent-margin treatment as `project.png` works well: leave breathing room around the visible screen, since the figure CSS doesn't add its own border.
- If a screenshot file is missing, the page still renders. The figure shows a broken-image placeholder until the file is in place.
