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
| `music/Cybertruck - The Electric Juggernaut.mp3` | Background music | Created by Joe Nasr using Suno under the artist name **ShallowWaters** (creator-provided provenance) | Suno-plan / terms verification still required |
| `music/cybertrucklowres.mp3` | Background music | Created by Joe Nasr using Suno under the artist name **ShallowWaters** (creator-provided provenance) | Suno-plan / terms verification still required |
| `music/Cybertrucking.mp3` | 2-byte placeholder / unusable asset | Placeholder file; provenance not relevant to runtime use | Not used in current playlist |
| `music/cybertruck.mp3` | 2-byte placeholder / unusable asset | Placeholder file; provenance not relevant to runtime use | Not used in current playlist |

The current contributor-readiness branch removes the two 2-byte placeholder files from the runtime playlist, but does not delete them from the repository.

### Music creator credit

The music used by the project was created by **Joe Nasr** with Suno and released/credited under the artist name **ShallowWaters**. This establishes creator provenance for the project documentation, but does not by itself establish redistribution or commercial-use rights under Suno's terms.

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
