# Asset provenance

The source code in this repository is licensed under the MIT License in `LICENSE`.

Non-code assets may have different rights. This file records the known source and usage status of the 3D and audio assets shipped with Cybertruck Madness '98.

## 3D models

| File | Runtime status | Source / provenance | Usage status |
|---|---|---|---|
| `fbx/cybertruck.glb` | Present in repository; not referenced by the current runtime code | TurboSquid product 1705879 by **Bryancr** | Listing is marked **Editorial Uses Only**; game/public-repository permission has been requested from TurboSquid |
| `fbx/moto.fbx` | **Current runtime player vehicle** | Git history shows it was previously named `Cybertruck.fbx`; original external source/license is not documented | Usage/redistribution rights not yet verified |

### TurboSquid asset

Source:

https://www.turbosquid.com/FullPreview/1705879

Creator/uploader: **Bryancr**

The listing is marked **Editorial Uses Only**. The file is not referenced by the current game runtime. Permission/clarification has been requested from TurboSquid for game use and public-repository distribution.

The runtime vehicle is `fbx/moto.fbx`, which is a separate file and should be treated separately for provenance and licensing.

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
