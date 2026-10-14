# Pixel Purge: Reincarnation

A faithful HTML5 recreation of the Flash twin-stick shooter **Pixel Purge**, rebuilt from scratch as a single-file, installable web game.

**Play:** https://ejbur158x.github.io/pxpgrcn/

> **Fan project, non-commercial.** Pixel Purge was created by **Epic Shadow Entertainment** (Matt Porter, Andrew Sandifer, Francine Louise). Original concept, design and game are theirs. This is an unofficial tribute made out of love for the original. The code here was written from scratch; game-design data (stats, timings, mechanics) was studied from the original to keep the feel faithful. If you're a rights holder and want something changed or removed, open an issue.

## What it is

- Mobile-first twin-stick shooter on a **3400 x 3400** world with a 4-layer parallax background.
- **9 enemy types** with tier-based sizing, plus a skill-upgrade system.
- Touch joysticks (aim / fire) and full **gamepad** support.
- Embedded pixel-art sprites and audio, so it's one self-contained `index.html`.
- **PWA**: add to Home Screen and play offline (embedded OFL font, no external requests).
- Fixed-timestep game loop, so speed is identical at 30, 60 or 120 Hz.

## Run it locally

Static files only. Serve the folder with any static server (service workers need `http://localhost` or HTTPS):

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire game |
| `manifest.json`, `sw.js` | PWA manifest and offline service worker |
| `icon-*.png`, `apple-touch-icon.png` | App icons |

When you change `index.html`, bump `CACHE_VERSION` in `sw.js` so installed copies pick up the update.

## Roadmap

Planned, not done:

- Title screen overhaul (infinite parallax scroll, no game UI)
- Bestiary, expanded Credits and Options screens
- Campaign mode: navigable map, 15 levels across 3 acts, with a final arena-warping boss
- New enemy and boss designs
- Electron packaging for Windows / Linux

## Credits

Original game: Epic Shadow Entertainment. Sprites: original hand-drawn art supplied for this project. HTML5 rebuild: EJ Burkle.
