# Architecture

Cybertruck Madness '98 is currently a single-page Three.js game. Most runtime code lives in `index.html`.

## Runtime stack

- HTML
- JavaScript ES modules
- Three.js 0.160.0
- FBXLoader
- BufferGeometryUtils
- Web Audio API
- Canvas 2D for the map
- browser touch events
- Vibration API where supported

There is no build step.

## Main runtime systems

### Scene and rendering

`init()` creates:

- `THREE.Scene`
- perspective camera
- WebGL renderer
- ambient light
- directional light
- fog
- shadows
- ACES tone mapping

### Terrain

`calculateTerrainHeight(x, z)` returns the terrain height from a deterministic mathematical function.

`createTerrain()` builds a 10,000 x 10,000 plane with 500 x 500 segments and applies the same height function to every vertex.

The runtime reads terrain height directly from the function instead of raycasting against the terrain mesh.

### Vehicle

`loadModels()` loads:

```text
fbx/moto.fbx
```

The file is added to `bikeGroup`.

If loading fails, `createFallbackBike()` creates a basic box vehicle so the game can still run.

### Input

Desktop input is handled by `onKey()`.

Current keyboard controls:

- W / Arrow Up: accelerate
- S / Arrow Down: reverse
- A / Arrow Left: steer left
- D / Arrow Right: steer right
- Space: brake and drift

Mobile input is handled by `controls.init()`.

The left touch zone controls steering and throttle.

The right touch zone controls brake and drift.

### Vehicle movement and drift

Movement is updated inside `animate()`.

The code tracks:

- forward speed
- lateral velocity
- steering input
- throttle input
- brake state
- gravity
- terrain height
- vehicle lean
- camera offset

Drift behavior activates when the player is moving above the minimum drift speed while braking and steering.

### World population

`createHighResTrees()` creates about 15,000 trees with `THREE.InstancedMesh`.

`createRocks()` creates 200 rocks.

Trees and rocks also populate the obstacle list used by `checkCollisions()`.

### Rings

`createRings()` creates 500 collectible rings.

Thirty percent are placed in a smaller range near the center to make the early game easier to enter.

`checkRings()` handles collection.

Each ring restores 20 battery points.

### Battery

`updateBattery()` drains battery while the vehicle moves.

Battery cannot fall below zero.

Collecting rings restores battery.

### Objective

The exit is hidden at the start.

The game requires 90 percent of the 500 rings:

```text
450 rings
```

After the target is reached, the green extraction beacon becomes visible.

Reaching the beacon completes the mission.

### Compass

`updateCompass()` points to the nearest remaining ring.

After the exit is unlocked, the compass points to the extraction position.

### Map

`drawBigMap()` renders the map with Canvas 2D.

It shows:

- remaining rings
- player position and heading
- exit location after unlock

### Cameras

There are two camera modes:

1. chase camera
2. top-down camera

`switchCamera()` toggles between them.

### Audio

The `sfx` object manages audio.

Procedural Web Audio is used for:

- engine
- skid
- collection
- landing / collision sound

Background music is loaded from the `music/` directory.

### Particles

`createDriftSmoke()` creates drift particles.

`createDust()` creates vehicle dust.

`updateParticles()` updates and removes them.

## Current code shape

The game is easy to inspect because the runtime is concentrated in one file.

That is also the main maintenance limitation.

Refactoring should stay incremental. Move one subsystem at a time and keep the playable behavior stable unless the change is intentionally gameplay-related.

## Good first extraction targets

- audio
- controls
- map
- compass
- particles
- terrain helpers
- UI state

See [CONTRIBUTING.md](CONTRIBUTING.md) and [ROADMAP.md](ROADMAP.md).
