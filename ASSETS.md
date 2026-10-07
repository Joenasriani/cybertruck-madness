# Asset provenance

This file tracks non-code assets currently shipped with Cybertruck Madness '98.

It is intentionally conservative: when provenance, ownership, or redistribution rights are not documented in the repository, the status is recorded as **unverified** rather than assumed.

## 3D models

| File | Current role | Provenance | Redistribution rights |
|---|---|---|---|
| `fbx/cybertruck.glb` | Main Cybertruck vehicle model | Not documented in repository | Unverified |
| `fbx/moto.fbx` | Motorcycle model / legacy asset | Not documented in repository | Unverified |

## Audio

| File | Current role | Provenance | Redistribution rights |
|---|---|---|---|
| `music/Cybertruck - The Electric Juggernaut.mp3` | Background music | Not documented in repository | Unverified |
| `music/cybertrucklowres.mp3` | Background music | Not documented in repository | Unverified |
| `music/Cybertrucking.mp3` | 2-byte placeholder / unusable asset | Not documented in repository | Unverified |
| `music/cybertruck.mp3` | 2-byte placeholder / unusable asset | Not documented in repository | Unverified |

The current contributor-readiness branch removes the two 2-byte placeholder files from the runtime playlist, but does not delete them from the repository.

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
