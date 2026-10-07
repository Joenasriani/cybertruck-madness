# Cybertruck Madness '98

An experimental open-world browser driving game built with Three.js and inspired by the chaotic feel of late-'90s PC driving games.

**Play it:** https://cybertruckmadness.vercel.app

> This repository is public and actively being prepared for broader community contribution. Licensing and third-party asset rights are still being clarified before the project is described as fully open source.

## What it is

Cybertruck Madness '98 drops you into a large procedural terrain where you drive, drift, collect rings, manage battery charge, navigate with a compass/map, and unlock an extraction objective.

The current build includes:

- Three.js rendering
- Large procedural terrain
- Arcade driving and drift physics
- Cybertruck 3D vehicle
- 500 collectible rings
- Battery / recharge mechanic
- Compass navigation
- Expandable map
- Keyboard controls
- Touch controls for mobile
- Camera switching
- Engine, skid, collection, and landing audio
- Extraction / mission-complete objective

## Controls

### Desktop

- `W` / `Arrow Up` — accelerate
- `S` / `Arrow Down` — reverse
- `A` / `Arrow Left` — steer left
- `D` / `Arrow Right` — steer right
- `Space` — brake / drift
- Use the HUD buttons for map, camera, music, and SFX controls

### Mobile

- Left touch zone — move and steer
- Right touch zone — hold to brake / drift
- HUD buttons control map, camera, music, and SFX

## Current architecture

The project is intentionally simple right now:

```text
.
├── Readme.md
├── index.html
├── fbx/
│   ├── cybertruck.glb
│   └── moto.fbx
└── music/
```

Most gameplay logic currently lives in `index.html`. That makes the project easy to inspect, but it also creates a clear contribution opportunity: progressively modularize systems without changing the playable behavior.

## Run locally

The project uses ES modules and browser-loaded assets, so run it from a local web server rather than opening `index.html` directly.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

No build step is currently required.

## Help take it further

Good areas for contribution include:

- Better vehicle physics and drift behavior
- Ramps, jumps, stunt scoring, and tricks
- New objectives and mission types
- Time trials and checkpoint systems
- Procedural terrain improvements
- Biomes and environmental variety
- Gamepad support
- Mobile control improvements
- Performance profiling and optimization
- Collision improvements
- Audio polish
- Additional accessibility settings
- Replay / score systems
- Map and navigation improvements
- Progressive modularization of `index.html`

See [ROADMAP.md](ROADMAP.md) and [CONTRIBUTING.md](CONTRIBUTING.md).

## Contribution philosophy

This project should stay playable, experimental, and a little strange.

The goal is not to turn it into a generic framework. Contributions should make the game more fun, more technically interesting, easier to extend, or easier to run.

Small focused pull requests are preferred over huge rewrites.

## Project status

Current status: **experimental / community-readiness phase**

The live game works, but repository structure, licensing, contributor workflow, and asset-rights documentation are still being improved.

## Licensing and third-party assets

No software license has been selected yet.

Until a license is added and third-party asset rights are documented, do not assume that public access to this repository grants unrestricted rights to reuse, redistribute, or commercially exploit the code, vehicle models, music, names, or other included assets.

## Disclaimer

This is an unofficial experimental fan project. It is not affiliated with, endorsed by, or sponsored by Tesla, Microsoft, or the creators of Motocross Madness.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

If you find a bug, performance issue, gameplay problem, or have a concrete idea that fits the project direction, open an issue first when the change is large.
