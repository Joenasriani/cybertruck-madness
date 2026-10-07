# Cybertruck Madness '98

An experimental open-world browser driving game built with Three.js and inspired by the chaotic feel of late-'90s PC driving games.

**Play it:** https://cybertruckmadness.vercel.app

> The source code is licensed under MIT. Bundled 3D/audio assets are documented separately in `ASSETS.md` because they may have different rights and provenance.

## What it is

Cybertruck Madness '98 drops you into a 10,000 × 10,000 procedural terrain where you drive, drift, collect rings, manage battery charge, navigate with a compass/map, and unlock an extraction objective.

The current build includes:

- Three.js rendering
- 10,000 × 10,000 procedural terrain
- Arcade driving and drift physics
- Runtime 3D vehicle loaded from `fbx/moto.fbx`
- 500 collectible rings
- Exit unlock at 450 rings (90%)
- +20 battery charge per collected ring
- Compass navigation to the nearest ring, then to the exit
- Expandable map showing remaining rings, player position, and unlocked exit
- About 15,000 procedurally placed trees
- 200 rocks plus tree/rock collision obstacles
- Keyboard controls
- Touch controls for mobile
- Mobile vibration / haptic feedback
- Two camera modes: chase and top-down
- Procedural engine, skid, collection, and landing SFX
- ShallowWaters background music
- Hidden green extraction beacon that appears after the ring target is reached
- Mission-complete / replay flow

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
- Supported devices also use vibration/haptic feedback for collection, drifting, braking interactions, and collisions

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

The current runtime loads `fbx/moto.fbx` as the player vehicle. Git history shows that file was previously named `Cybertruck.fbx`. The separate `fbx/cybertruck.glb` file is present in the repository but is not referenced by the current game code.

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

Current status: **experimental / actively developed**

The live game works. The source code is MIT-licensed, and contributions are welcome.

## Licensing and third-party assets

The source code is licensed under the [MIT License](LICENSE).

That license applies to the software source code. It does not automatically grant rights to the bundled 3D models, music, names, trademarks, or other separately sourced assets. See [ASSETS.md](ASSETS.md) for the current provenance and rights status.

## Disclaimer

This is an unofficial experimental fan project. It is not affiliated with, endorsed by, or sponsored by Tesla, Microsoft, or the creators of Motocross Madness.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

If you find a bug, performance issue, gameplay problem, or have a concrete idea that fits the project direction, open an issue first when the change is large.
