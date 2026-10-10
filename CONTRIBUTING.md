# Contributing

Thanks for wanting to push Cybertruck Madness '98 further.

Keep changes small enough to review properly.

## What can be proposed

The roadmap is a guide, not a restriction.

You can propose work outside it if the idea is productive and concrete.

A productive contribution should do at least one of these:

- improve how the game feels or plays
- add a useful mechanic or system
- test a new direction with a prototype
- improve performance or reliability
- improve mobile or accessibility
- improve visuals, sound or feedback
- make the code easier to understand or extend
- add useful documentation or tooling

For a new direction, open an issue first and explain:

1. what you want to change
2. why it belongs in the project
3. what the smallest useful version is
4. how it can be tested

Large ideas can start with a proof of concept. They do not need to arrive as a finished system.

## Before you start

1. Play the current build: https://cybertruckmadness.vercel.app
2. Read [ROADMAP.md](ROADMAP.md).
3. Check existing issues before starting large work.
4. For major gameplay, architecture, or asset changes, open an issue first.

## Local setup

Run the repository from a local web server.

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

No build step is currently required.

## Current structure

Most game systems still live in `index.html`.

That includes rendering, input, audio, vehicle behavior, terrain, collectibles, navigation, UI, and mission logic.

This is a known limitation and a contribution opportunity. Refactoring should be incremental and must preserve current behavior unless the pull request explicitly changes gameplay.

## Good contribution types

- Bug fixes
- Performance improvements
- Physics improvements
- Mobile control fixes
- Gamepad support
- Terrain / biome improvements
- Mission or challenge systems
- Stunt mechanics
- UI / accessibility improvements
- Audio fixes
- Collision improvements
- Code modularization
- Documentation

## Community Cybertruck models and credits

We need an original, appropriately licensed **Cybertruck** vehicle. The Cybertruck stays in the game. See [3D artists wanted: issue #15](https://github.com/Joenasriani/cybertruck-madness/issues/15).

- The first milestone is **one rights-cleared model**. Additional designs and a vehicle selector are optional, separate tasks.
- Submit game-ready **FBX** or **GLB/glTF**, plus editable model source files when available. Include images and performance notes for desktop and mobile.
- Verify authorship or permission to contribute. Record creator, source, exact license, redistribution and modification permissions, commercial-use permissions, and required attribution. Prefer **CC0 or CC BY 4.0** for original 3D model contributions.
- Do not reuse assets with unknown rights. An asset license alone does not resolve third-party trademark or industrial-design restrictions.
- State your preferred credit name or GitHub username, or request anonymous attribution.
- **Accepted** artists and developers will be credited **in the game** and **in the README**. Each approved vehicle receives its own creator credit.
- Preserve driving, controls, camera, terrain, collisions, sound and mission behavior. Test the changes and describe results.
- The software remains **MIT-licensed**. Media assets have individually documented licenses in [ASSETS.md](ASSETS.md). Do not assume MIT covers bundled media.

## Pull request rules

Keep pull requests focused.

A good pull request should:

- Solve one clear problem
- Explain what changed
- Explain how it was tested
- Avoid unrelated formatting or rewrites
- Preserve the live game unless behavior changes are intentional
- Avoid introducing unnecessary dependencies
- Avoid replacing the entire architecture in one change

For visual or gameplay changes, screenshots or short recordings are useful.

## Testing

There is not yet an automated test suite.

For now, manually verify at minimum:

- Desktop controls
- Mobile/touch controls when relevant
- Vehicle movement
- Drift / brake behavior
- Ring collection
- Battery behavior
- Map / compass behavior
- Camera switching
- Audio toggles
- Mission completion path
- No obvious console errors

If your change only affects one subsystem, document the exact path you tested.

## Assets

Do not add third-party models, textures, audio, fonts, logos, or other assets unless their usage and redistribution rights are clear.

Include the source and license information in the pull request.

## Licensing note

The repository source code is licensed under the MIT License. Bundled 3D/audio assets are tracked separately in `ASSETS.md` and may have different or unresolved rights.

## Style

Prefer readable, direct code over clever abstractions.

When modularizing, keep systems easy to trace and avoid adding a framework unless it solves a real problem for this game.

## Questions

Use GitHub issues for concrete bugs, feature proposals, and implementation questions.
