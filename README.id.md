# Cybertruck Madness '98

Game mengemudi open-world eksperimental di browser, dibuat dengan Three.js dan terinspirasi oleh nuansa kacau dan bebas dari game mengemudi PC akhir 1990-an.

**Mainkan:** https://cybertruckmadness.vercel.app

> Repositori ini bersifat publik dan sedang dipersiapkan untuk menerima kontribusi komunitas yang lebih luas. Lisensi perangkat lunak dan hak atas aset pihak ketiga masih sedang diklarifikasi sebelum proyek ini disebut sepenuhnya open source.

## Apa ini

Cybertruck Madness '98 membawa Anda ke medan prosedural yang luas, tempat Anda mengemudi, drift, mengumpulkan ring, mengelola baterai, bernavigasi dengan kompas/peta, lalu membuka target ekstraksi.

Build saat ini mencakup:

- Rendering Three.js
- Medan prosedural skala besar
- Fisika mengemudi dan drift bergaya arcade
- Kendaraan Cybertruck 3D
- 500 ring yang dapat dikumpulkan
- Mekanisme baterai / isi ulang
- Navigasi kompas
- Peta yang dapat diperluas
- Kontrol keyboard
- Kontrol sentuh untuk mobile
- Pergantian kamera
- Audio mesin, skid, koleksi, dan pendaratan
- Target ekstraksi / penyelesaian misi

## Kontrol

### Desktop

- `W` / `Arrow Up` — akselerasi
- `S` / `Arrow Down` — mundur
- `A` / `Arrow Left` — belok kiri
- `D` / `Arrow Right` — belok kanan
- `Space` — rem / drift
- Gunakan tombol HUD untuk peta, kamera, musik, dan SFX

### Mobile

- Zona sentuh kiri — bergerak dan mengemudi
- Zona sentuh kanan — tahan untuk rem / drift
- Tombol HUD mengontrol peta, kamera, musik, dan SFX

## Arsitektur saat ini

Untuk sekarang proyek ini sengaja dibuat sederhana:

```text
.
├── Readme.md
├── index.html
├── fbx/
│   ├── cybertruck.glb
│   └── moto.fbx
└── music/
```

Sebagian besar logika gameplay saat ini berada di `index.html`. Ini membuat proyek mudah diperiksa, tetapi juga membuka peluang kontribusi yang jelas: memodularisasi sistem secara bertahap tanpa mengubah perilaku permainan.

## Jalankan secara lokal

Proyek menggunakan ES modules dan aset yang dimuat browser, jadi jalankan dari server web lokal, bukan dengan membuka `index.html` secara langsung.

Contoh:

```bash
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

Saat ini tidak diperlukan langkah build.

## Bantu membawanya lebih jauh

Area kontribusi yang bagus meliputi:

- Fisika kendaraan dan perilaku drift yang lebih baik
- Ramp, lompatan, penilaian stunt, dan trik
- Tujuan dan tipe misi baru
- Time trial dan sistem checkpoint
- Peningkatan medan prosedural
- Bioma dan variasi lingkungan
- Dukungan gamepad
- Peningkatan kontrol mobile
- Profiling dan optimasi performa
- Peningkatan tabrakan
- Penyempurnaan audio
- Pengaturan aksesibilitas tambahan
- Sistem replay / skor
- Peningkatan peta dan navigasi
- Modularisasi bertahap `index.html`

Lihat [ROADMAP.md](ROADMAP.md) dan [CONTRIBUTING.md](CONTRIBUTING.md).

## Filosofi kontribusi

Proyek ini harus tetap dapat dimainkan, eksperimental, dan sedikit aneh.

Tujuannya bukan mengubahnya menjadi framework umum. Kontribusi harus membuat game lebih menyenangkan, lebih menarik secara teknis, lebih mudah dikembangkan, atau lebih mudah dijalankan.

Pull Request kecil dan terfokus lebih disukai daripada penulisan ulang besar.

## Status proyek

Status saat ini: **eksperimental / fase kesiapan komunitas**

Game live sudah berjalan. Kode sumber dilisensikan dengan MIT; alur kontribusi dan dokumentasi hak aset masih terus diperbaiki.

## Lisensi dan aset pihak ketiga

Kode sumber dilisensikan di bawah [MIT License](LICENSE).

Lisensi ini berlaku untuk kode sumber perangkat lunak. Lisensi ini tidak otomatis memberikan hak atas model 3D, musik, nama, merek dagang, atau aset lain yang berasal dari sumber terpisah. Lihat [ASSETS.md](ASSETS.md) untuk status asal dan hak saat ini.

## Penafian

Ini adalah proyek fan eksperimental tidak resmi. Proyek ini tidak berafiliasi, didukung, atau disponsori oleh Tesla, Microsoft, atau pembuat Motocross Madness.

## Berkontribusi

Baca [CONTRIBUTING.md](CONTRIBUTING.md) sebelum membuka Pull Request.

Jika Anda menemukan Bug, masalah performa, masalah gameplay, atau memiliki ide konkret yang sesuai dengan arah proyek dan perubahannya besar, buka Issue terlebih dahulu.
