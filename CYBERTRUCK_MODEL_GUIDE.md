# Contribute a Cybertruck model

[Game](https://cybertruckmadness.vercel.app/) · [Contributor issue #15](https://github.com/Joenasriani/cybertruck-madness/issues/15) · [Asset provenance](ASSETS.md) · [Contributing](CONTRIBUTING.md)

We are looking for an **original, appropriately licensed Cybertruck-style vehicle** to keep the game playable and open source. One approved model is the first milestone. Additional distinct variants are welcome afterward. **No replacement is approved yet.**

## What the current code actually does

In `index.html`, `loadModels()` creates `bikeGroup`, then uses Three.js `FBXLoader` to load `fbx/moto.fbx`. The loaded object is scaled uniformly to `0.005`, rotated `0` around Y, added to `bikeGroup`, and given shadow casting/receiving. `bikeGroup` also holds an exhaust emitter; steering, drifting, terrain following, compass, map and both cameras depend on this group. When loading fails, `createFallbackBike()` adds a simple box vehicle. The separate `fbx/cybertruck.glb` is **not** loaded.

**Important:** The scale of `0.005` is specific to the current FBX. It is **not** a required modeling scale. Contributors should present model units and the desired transform, so integration can use sensible scale and orientation. Do not assume existing models are licensed reference assets.

## Submission package

1. Original FBX or GLB/glTF model, with any required textures and material files. Editable source file is welcome.
2. 2–4 clear renders, including front, side, rear and/or in-game views.
3. Polygon/triangle count, textures and sizes, model units, approximate file size, forward/up axes and origin/pivot placement.
4. Short notes on wheels, ground contact, shadows, materials, and mobile performance. Describe which parts are decorative versus animated.
5. License document or text and evidence of authorship or granted rights. CC0 and CC BY 4.0 are preferred when the creator can validly grant them. The permissions must cover editing, GitHub redistribution and commercial reuse.
6. Preferred credit name or GitHub handle, optional creator link, and whether anonymous credit is preferred.
7. Any required attribution or restrictions, including possible trademark/design-right concerns.

**Do not base submissions on the existing uncleared assets, ripped files, or unauthorized marketplace models.** A permissive asset license alone does not resolve third-party trademark/design rights.

## Integration expectations

Keep the Cybertruck identity, the current visual direction and the existing game systems. Preserve loading progress, fallback behavior, exhaust, steering, drift, camera alignment and shadowing. Test desktop, mobile portrait and mobile landscape. Report the exact checks performed. Do not replace live assets before rights clearance and gameplay review.

The current code is licensed **MIT**. Vehicle and audio assets have separate rights. Accepted contributors will be credited **in the game and README**, with model-by-model attribution. No names will be published until contributions are accepted.

## How to participate

Start with [issue #15](https://github.com/Joenasriani/cybertruck-madness/issues/15). Share a short proposal, sample renders, model format and licensing plan. A pull request is welcome once there is a focused, reviewable change.

**Review criteria:** Provenance and redistribution rights first, then recognizable Cybertruck design, performance, visual fit, integration quality and verified regression tests. Additional models and a vehicle selector are optional follow-ups.
