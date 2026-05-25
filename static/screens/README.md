# Screens

Product screenshots referenced from content pages. Hugo serves anything in
`static/` at the site root, so a file here at `static/screens/foo.png` is
reachable at `/screens/foo.png`.

The iPhone shot list lives one level down in `ios/`.

## Refresh note (2026-05-24)

All existing Mac screenshots predate the flat printed-paper visual
overhaul and the OVERDUE-red treatment. Plan to recapture the Mac
set alongside the iPhone set in the next screenshot session. Use the
marketing data folder produced by `daygaps-marketing-gen/` so the
contents match across Mac and iPhone shots.

## Expected files

| Path                  | Used by                              | Description |
|-----------------------|--------------------------------------|-------------|
| `project.png`         | philosophy.md                        | The "Q2 Paper Draft" project (matching the YAML in philosophy.md) opened in DayGaps. |
| `today.png`           | landing (scene 2) + philosophy + patterns | Today view showing several named gaps across the day with their tasks visible. The bread-and-butter shot of the app. |
| `focus.png`           | landing (scene 1) + philosophy + patterns | Main window with a single gap focused and the others visibly muted. Shows the in-window click-to-focus gesture. |
| `standalone.png`      | landing (scene 3) + philosophy + patterns | A standalone gap window: just one gap and its tasks, no sidebar, no inspector. Right-click-and-open-in-new-window result. |
| `planning-week.png`   | patterns ("Sunday evening")          | A view of the week being planned: calendar inspector visible, multiple days with named gaps across them, tasks pulled into the gaps. The planning surface in full chrome. |
| `inbox.png`           | patterns ("Capturing mid-day")       | The inbox in the right pane, with a few captured one-line items in it. Show the small entry field if it's visible during capture. |

## Capture notes

- Use the marketing data folder. Run `python3 ../../daygaps-marketing-gen/generate.py` first.
- Use the app's default light theme; the site renders dark variants via CSS.
- 2x retina (export at actual pixel density; let CSS do the downscaling).
- Trim window chrome unless the chrome itself is meant to be part of the screenshot.
- Save as PNG. If the file ends up over 300KB after capture, run it through `cwebp` or `pngquant` before committing.
- Same transparent-margin treatment as `project.png` works well: leave breathing room around the visible screen, since the figure CSS doesn't add its own border.
- If a screenshot file is missing, the page still renders. The figure shows a broken-image placeholder until the file is in place.
