# Contributing

Thanks for wanting to push Cybertruck Madness '98 further.

The project is currently in a community-readiness phase. Contributions are welcome, but the repository is intentionally being evolved in small, reviewable steps.

## Before you start

1. Play the current build: https://teslamadness.vercel.app
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

The repository does not yet have a finalized software license. Do not assume public visibility equals unrestricted reuse rights.

## Style

Prefer readable, direct code over clever abstractions.

When modularizing, keep systems easy to trace and avoid adding a framework unless it solves a real problem for this game.

## Questions

Use GitHub issues for concrete bugs, feature proposals, and implementation questions.
