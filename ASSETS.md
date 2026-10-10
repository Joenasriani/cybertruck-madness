# Asset provenance

The source code in this repository is licensed under the MIT License in `LICENSE`.

Non-code assets may have different rights. This file records the known source and usage status of the 3D and audio assets shipped with Cybertruck Madness '98.

## 3D models

| File | Runtime status | Source / provenance | Usage status |
|---|---|---|---|
| `fbx/cybertruck.glb` | Present in repository; not referenced by the current runtime code | TurboSquid product 1705879 by **Bryancr** | Listed as **Editorial Uses Only**. The owner's request for permission to use/redistribute it did not succeed. **Not cleared** |
| `fbx/moto.fbx` | **Current runtime player vehicle** | Git history shows it was previously named `Cybertruck.fbx`; original external source/license is not documented | Usage/redistribution rights not yet verified |

### TurboSquid asset

Source:

https://www.turbosquid.com/FullPreview/1705879

Creator/uploader: **Bryancr**

The listing is marked **Editorial Uses Only**. The file is not referenced by the current game runtime. The owner's permission request did not succeed; game/public-repository redistribution remains **uncleared**.

The runtime vehicle is `fbx/moto.fbx`, which is a separate file and should be treated separately for provenance and licensing.

## Community Cybertruck replacement status

**Action:** Invite original, rights-cleared Cybertruck models via [issue #15](https://github.com/Joenasriani/cybertruck-madness/issues/15). Keep the Cybertruck as the playable vehicle. A model selector for extra original variants is optional.

**Current status:** No approved replacement model has been received or integrated. `fbx/moto.fbx` is currently loaded by the game but its rights remain unverified. `fbx/cybertruck.glb` is unused and permission for game/public redistribution was not obtained. **Do not present existing assets as cleared** or merge new models without verification.

When an asset is accepted, replace this placeholder with a record per model:

| Model file | Model name | Creator / credited name | Provenance | Asset license | Permission evidence | Integrated / tested |
| --- | --- | --- | --- | --- | --- | --- |
| Awaiting first verified submission | | | | | | |

Preferred licenses for original community-contributed models: **CC0** or **CC BY 4.0**, subject to checking the specific work's ownership, the grant, any required attribution, and remaining design/trademark issues. A source-code MIT license does not automatically apply to models, music, or other assets.

Accepted model authors and developers must also be credited in the game's Credits UI and the README. Preserve the previous provenance entries even after replacing distributed assets. Separately review repository history and outstanding audio rights. Do not treat a later model replacement as retroactively clearing earlier public distributions.

## Audio

| File | Runtime status | Source / provenance | Usage status |
|---|---|---|---|
| `music/Cybertruck - The Electric Juggernaut.mp3` | Background music | Created with Suno and credited as **ShallowWaters** | Commercial-use status depends on the Suno plan applicable when the track was created/downloaded |
| `music/cybertrucklowres.mp3` | Background music | Created with Suno and credited as **ShallowWaters** | Commercial-use status depends on the Suno plan applicable when the track was created/downloaded |
| `music/Cybertrucking.mp3` | Not used by the current runtime playlist | 2-byte unusable file | No runtime use |
| `music/cybertruck.mp3` | Not used by the current runtime playlist | 2-byte unusable file | No runtime use |

The current runtime playlist uses:

```text
music/cybertrucklowres.mp3
music/Cybertruck - The Electric Juggernaut.mp3
```

### Suno terms

Under Suno's current terms, outputs created while subscribed to Pro or Premier may carry commercial-use rights subject to Suno's applicable terms. Outputs created on the Basic/free tier are limited to personal, non-commercial use unless qualifying rights are otherwise granted.

The plan that applied to these specific tracks has not been confirmed.

## Runtime dependency

The game loads Three.js modules from jsDelivr:

```text
https://cdn.jsdelivr.net/npm/three@0.160.0/
```

This is a code dependency, not a repository-owned media asset.

## Trademarks and names

Cybertruck, Tesla, and Motocross Madness are referenced descriptively in this unofficial experimental fan project. The project does not imply affiliation, sponsorship, or endorsement by the relevant trademark owners.

## Contribution rule for assets

Do not add third-party models, textures, audio, fonts, logos, or other media unless their source and usage/redistribution rights are documented.
