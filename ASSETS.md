# Asset provenance

## Code license vs. asset rights

The repository source code is licensed under the MIT License in `LICENSE`.

That software license does **not** by itself grant rights to third-party or separately sourced non-code assets. The 3D models and music listed below remain governed by their own provenance and usage rights until those rights are verified and documented.


This file tracks non-code assets currently shipped with Cybertruck Madness '98.

It is intentionally conservative: when provenance, ownership, or redistribution rights are not documented in the repository, the status is recorded as **unverified** rather than assumed.

## 3D models

| File | Current role | Provenance | Redistribution rights |
|---|---|---|---|
| `fbx/cybertruck.glb` | Repository asset; **not referenced by the current runtime code** | TurboSquid product 1705879, creator/uploader **Bryancr** | **Editorial Uses Only**; not cleared for normal game use or open redistribution without additional permission |
| `fbx/moto.fbx` | **Current runtime player vehicle** | Git history shows it was previously named `Cybertruck.fbx`; original external source/license is not documented in the repository | Unverified |

## Audio

| File | Current role | Provenance | Redistribution rights |
|---|---|---|---|
| `music/Cybertruck - The Electric Juggernaut.mp3` | Background music | Created with Suno under the artist name **ShallowWaters** (creator-provided provenance) | Suno-plan / terms verification still required |
| `music/cybertrucklowres.mp3` | Background music | Created with Suno under the artist name **ShallowWaters** (creator-provided provenance) | Suno-plan / terms verification still required |
| `music/Cybertrucking.mp3` | 2-byte placeholder / unusable asset | Placeholder file; provenance not relevant to runtime use | Not used in current playlist |
| `music/cybertruck.mp3` | 2-byte placeholder / unusable asset | Placeholder file; provenance not relevant to runtime use | Not used in current playlist |

The current contributor-readiness branch removes the two 2-byte placeholder files from the runtime playlist, but does not delete them from the repository.

### Music creator credit

The music used by the project was created with Suno and released/credited under the artist name **ShallowWaters**. This establishes creator provenance for the project documentation, but does not by itself establish redistribution or commercial-use rights under Suno's terms.

## Runtime dependency

The game currently loads Three.js modules from jsDelivr:

```text
https://cdn.jsdelivr.net/npm/three@0.160.0/
```

This is a code dependency, not a repository-owned asset.

## Before declaring the project fully open source

For each shipped non-code asset, document:

1. Original creator / source
2. Source URL or internal provenance
3. License or explicit permission
4. Whether redistribution is permitted
5. Whether modification is permitted
6. Whether commercial use is permitted, if relevant
7. Required attribution

If rights cannot be verified, replace the asset with one whose provenance and license are clear before making broad reuse claims.

## Naming and trademarks

Cybertruck, Tesla, and Motocross Madness are referenced descriptively in this experimental fan project. The project should not imply affiliation, sponsorship, or endorsement by the relevant trademark owners.


## Suno terms verification

Checked against Suno's current Terms of Service and Help Center in October 2026:

- Outputs created while subscribed to Suno Pro or Premier can carry ownership/commercial-use rights, subject to Suno's Terms and permitted-download requirements.
- Outputs created on the Basic/free tier are limited to personal, non-commercial use unless Suno separately grants qualifying rights.
- A later paid subscription does not automatically make earlier free-tier generations commercially licensed.
- Copyright protection is separate from contractual ownership/commercial-use rights and can vary by jurisdiction.

For this repository, the remaining verification item is therefore track-specific: confirm the Suno account tier and permitted-download status that applied to each music track when it was created/downloaded.


### TurboSquid Cybertruck asset source

The source provided for `fbx/cybertruck.glb` is:

https://www.turbosquid.com/FullPreview/1705879

TurboSquid identifies the creator/uploader as **Bryancr** (product ID 1705879).

The listing is marked **Editorial Uses Only**. TurboSquid's current licensing guidance states that Editorial Use models are intended for editorial/news/academic contexts and are not cleared for ordinary video-game use without separate rights from the depicted IP holder. TurboSquid also prohibits redistribution of the source 3D model file itself outside a permitted Creation.

For that reason, this asset must not be treated as covered by any source-code license in this repository. It is also important that the current runtime does **not** reference `fbx/cybertruck.glb`.

The player vehicle actually loaded by `index.html` is `fbx/moto.fbx`. Git history shows that file was renamed from `Cybertruck.fbx`, but the repository does not document its original external source or license. Its provenance therefore remains a separate unresolved item.

Before a true open-source release, either verify the rights for each shipped model independently or remove/replace any model whose redistribution and game-use rights cannot be confirmed.
