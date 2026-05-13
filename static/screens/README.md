# Screens

Product screenshots referenced from content pages. Hugo serves anything in
`static/` at the site root, so a file here at `static/screens/foo.png` is
reachable at `/screens/foo.png`.

## Expected files

| Path             | Used by                 | Description |
|------------------|-------------------------|-------------|
| `project.png`    | `content/philosophy.md` | The "Q2 Paper Draft" project (matching the YAML in that file) opened in DayGaps. Done. Already in place. |
| `today.png`      | `content/philosophy.md` | Today view showing several named chunks across the day (e.g. *Morning focus*, *Lunch*, *Afternoon writing*) with their tasks visible. Demonstrates "the gap is the unit." |
| `focus.png`      | `content/philosophy.md` | The main window with a single chunk focused (elevated, brighter) and the other chunks visibly muted. The in-window click-to-focus gesture. |
| `standalone.png` | `content/philosophy.md` | A standalone gap window: just one chunk and its tasks, no sidebar, no inspector. Right-click-and-open-in-new-window result. |

## Capture notes

- Capture on a clean window. No personal data visible. Substitute fake content where needed (e.g., use the *Q2 Paper Draft* project for any task-list visible in `today.png`).
- Use the app's default light theme; the site renders dark variants via CSS.
- 2x retina (export at actual pixel density; let CSS do the downscaling).
- Trim window chrome unless the chrome itself is meant to be part of the screenshot.
- Save as PNG. If the file ends up over 300KB after capture, run it through `cwebp` or `pngquant` before committing.
- Same transparent-margin treatment as `project.png` works well: leave breathing room around the visible screen, since the figure CSS doesn't add its own border.
