# Roadmap

This roadmap is intentionally practical. It focuses on changes that make the game more fun, more extensible, and easier for contributors to work on.

## P0 — Community readiness

- [x] Replace the minimal README with real project documentation
- [x] Add contribution guidance
- [x] Add issue and pull request templates
- [x] Document current architecture
- [x] License source code under MIT
- [ ] Document rights / provenance for vehicle models and music
- [ ] Verify all shipped assets and references
- [ ] Add repository topics
- [ ] Enable GitHub Discussions
- [ ] Establish first tagged community baseline release

## P1 — Core gameplay

- [ ] Improve vehicle handling and drift tuning
- [ ] Add ramps / jumps
- [ ] Add stunt scoring
- [ ] Add time trials
- [ ] Add checkpoint challenges
- [ ] Add new mission types
- [ ] Improve collision behavior
- [ ] Add better recovery / reset behavior

## P2 — World

- [ ] Improve procedural terrain
- [ ] Add biome variation
- [ ] Add environmental landmarks
- [ ] Add more meaningful obstacles
- [ ] Improve exploration incentives

## P3 — Controls and accessibility

- [ ] Add gamepad support
- [ ] Improve mobile steering feel
- [ ] Improve touch feedback
- [ ] Add remappable controls
- [ ] Add reduced-motion / effects options where practical

## P4 — Performance and architecture

- [ ] Profile CPU / GPU bottlenecks
- [ ] Reduce unnecessary allocations in the animation loop
- [ ] Improve particle performance
- [ ] Review terrain complexity
- [ ] Modularize `index.html` progressively
- [ ] Separate game systems without introducing unnecessary framework overhead

Possible future structure:

```text
src/
  game/
  controls/
  physics/
  terrain/
  audio/
  ui/

assets/
  models/
  audio/
```

## P5 — Community-driven expansion

Potential areas once the baseline is stable:

- Additional vehicles
- Replay / ghost systems
- Scoreboards
- New maps
- Challenge packs
- Community-created missions
- Experimental multiplayer prototypes

These are not commitments. They are contribution directions.

## What we are not optimizing for

- Turning the project into a generic engine
- Large framework migrations without a clear payoff
- Enterprise-style architecture
- Feature quantity over playability

The project should stay immediate, playable, and fun to modify.
