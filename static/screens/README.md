# Screens

Product screenshots referenced from content pages. Hugo serves anything in
`static/` at the site root, so a file here at `static/screens/foo.png` is
reachable at `/screens/foo.png`.

## Expected files

| Path                                | Used by                          | Description |
|-------------------------------------|----------------------------------|-------------|
| `project.png`                       | `content/philosophy.md`          | The "Q2 Paper Draft" project (matching the YAML in that file) opened in DayGaps. PNG has transparent margin around the visible screen, which acts as the figure frame. |

## Capture notes

- Capture on a clean window. No personal data visible.
- Use the app's default light theme (the site renders dark variants via CSS).
- 2x retina (export at actual pixel density; let CSS do the downscaling).
- Trim window chrome unless the chrome itself is meant to be part of the screenshot.
- Save as PNG. If the file ends up >300KB after capture, run it through `cwebp`
  or `pngquant` before committing.
