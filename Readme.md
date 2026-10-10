# Cybertruck Madness '98

[English](Readme.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md)

An experimental open-world browser driving game built with Three.js and inspired by the chaotic feel of late-'90s PC driving games.

**Play it:** https://cybertruckmadness.vercel.app

> The source code is licensed under MIT. Bundled 3D/audio assets are documented separately in `ASSETS.md` because they may have different rights and provenance.

## Start here

- Play: https://cybertruckmadness.vercel.app
- Inspect the game: [index.html](index.html)
- Pick a contributor task: [open issues](https://github.com/Joenasriani/cybertruck-madness/issues)
- Propose a design without code: [design proposal](https://github.com/Joenasriani/cybertruck-madness/issues/new?template=design_proposal.md)
- Read the architecture: [ARCHITECTURE.md](ARCHITECTURE.md)
- Design a challenge without code: [DESIGNING_CHALLENGES.md](DESIGNING_CHALLENGES.md)
- Read the contribution rules: [CONTRIBUTING.md](CONTRIBUTING.md)

## What it is

Cybertruck Madness '98 drops you into a 10,000 × 10,000 procedural terrain where you drive, drift, collect rings, manage battery charge, navigate with a compass/map, and unlock an extraction objective.

What is in the current build:

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

## Why inspect the source

The game is small enough to trace without a framework or build pipeline, but it already contains several systems worth studying:

- 10,000 × 10,000 mathematical terrain generation without terrain raycasting
- about 15,000 trees rendered with `THREE.InstancedMesh`
- custom arcade vehicle movement and drift behavior
- touch steering, brake/drift input and mobile haptics
- canvas-based world map and nearest-target compass
- procedural Web Audio engine, skid, collection and landing sounds
- collectible, battery and extraction-state logic
- no build step required for local inspection

## Controls

### Desktop

- `W` / `Arrow Up`: accelerate
- `S` / `Arrow Down`: reverse
- `A` / `Arrow Left`: steer left
- `D` / `Arrow Right`: steer right
- `Space`: brake / drift
- Use the HUD buttons for map, camera, music, and SFX controls

### Mobile

- Left touch zone: move and steer
- Right touch zone: hold to brake / drift
- HUD buttons control map, camera, music, and SFX
- Supported devices also use vibration/haptic feedback for collection, drifting, braking interactions, and collisions

## Current architecture

Current structure:

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

## Where the systems live

Most game systems are still in `index.html`, which makes the current implementation easy to follow.

| System | Current implementation |
|---|---|
| Touch controls | `controls.init()` |
| Keyboard input | `onKey()` |
| Vehicle movement and drift | `animate()` |
| Terrain height | `calculateTerrainHeight()` |
| Terrain mesh | `createTerrain()` |
| Trees | `createHighResTrees()` |
| Rocks and collision obstacles | `createRocks()`, `checkCollisions()` |
| Rings | `createRings()`, `checkRings()` |
| Battery | `updateBattery()` |
| Map | `drawBigMap()` |
| Compass | `updateCompass()` |
| Audio | `sfx` |
| Vehicle loading | `loadModels()` |
| Exit beacon | `createExitBeacon()` |

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

## Open contribution scope

Cybertruck Madness '98 is the base, not a fixed feature list.

Productive ideas and executions are welcome when they add clear value to the game or the project. That can include:

- new gameplay systems
- driving and physics experiments
- multiplayer and room systems
- visual direction and motion
- world and environment ideas
- missions, challenges and scoring
- procedural systems
- audio and feedback
- mobile controls
- accessibility
- performance work
- architecture improvements
- developer tools
- documentation
- prototypes that test a strong new direction

Ideas do not have to fit the current roadmap if they are specific enough to evaluate.

A proposal should explain what changes, why it is useful, and how it can be tested. A working prototype or focused pull request is even better.

## Where to contribute

Useful contribution areas:

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

See [ARCHITECTURE.md](ARCHITECTURE.md), [DESIGNING_CHALLENGES.md](DESIGNING_CHALLENGES.md), [ROADMAP.md](ROADMAP.md) and [CONTRIBUTING.md](CONTRIBUTING.md).

### Design contributions without code

You can contribute a driving challenge without writing JavaScript.

A useful proposal can be a sketch, route diagram, annotated screenshot or short design note. Include:

- objective
- route or area
- mechanics already used by the challenge
- difficulty
- success and failure conditions
- optional visual reference

Good fits for the current game include checkpoint routes, stunt locations, ring placement, exploration pacing, mission ideas, environmental landmarks and accessibility changes.

For larger ideas, open an issue first so the scope can be checked against the current game systems.


## Contribution philosophy

Keep the game playable, experimental, and recognizable.

Do not turn it into a generic framework. Changes should improve the game, the code, performance, controls, or extensibility.

Prefer focused pull requests over large rewrites.

## Project status

Status: **experimental / actively developed**

The live game works. The source code is MIT-licensed, and contributions are welcome.

## Community Cybertruck models and credits

**3D artists and developers wanted:** [Contribute an original Cybertruck model (issue #15)](https://github.com/Joenasriani/cybertruck-madness/issues/15).

The game will **keep a Cybertruck as its playable vehicle**. The goal is a rights-cleared, game-ready community model, with additional original variants and a small vehicle selector welcome later. The current vehicle assets are **not yet redistribution-cleared**; see [ASSETS.md](ASSETS.md). No new model is approved yet.

Accepted model creators and integration contributors will receive individual **in-game credits** and **README recognition**, using their chosen display name or GitHub handle; contributors can also request anonymity. The source code remains MIT-licensed. Model asset licenses are recorded separately and must permit modification and public redistribution, including commercial use.

**Accepted community contributors:** Awaiting first rights-verified model and integration. Credits will be added by name upon acceptance.

## Licensing and third-party assets

The source code is licensed under the [MIT License](LICENSE).

That license applies to the software source code. It does not automatically grant rights to the bundled 3D models, music, names, trademarks, or other separately sourced assets. See [ASSETS.md](ASSETS.md) for the current provenance and rights status.

## Disclaimer

This is an unofficial experimental fan project. It is not affiliated with, endorsed by, or sponsored by Tesla, Microsoft, or the creators of Motocross Madness.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

If you find a bug, performance issue, gameplay problem, or have a concrete idea that fits the project direction, open an issue first when the change is large.
