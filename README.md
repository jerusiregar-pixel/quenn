# Landing Page GMA Affiliate — Queen

Website statis, mobile-first, dan siap di-host melalui GitHub Pages atau Vercel.

## Cara mengganti poster
1. Siapkan poster dalam format JPG.
2. Ubah nama file menjadi `poster.jpg`.
3. Masukkan ke folder `assets/`.

Lokasi akhir:
`assets/poster.jpg`

## Mengubah tautan pendaftaran
Buka `script.js`, lalu ganti nilai:

```js
const OFFICIAL_REGISTRATION_URL = 'https://affiliate.garudaqu.com/';
```

dengan link referral resmi milik Queen.

## Nomor WhatsApp
Nomor sudah diatur ke:
`+62 882-9352-8853`

Format tautan WhatsApp:
`6288293528853`

## Deploy ke Vercel
- Upload folder ini ke repository GitHub.
- Impor repository ke Vercel.
- Framework preset: `Other`.
- Build command: kosong.
- Output directory: kosong / root.

## Deploy ke GitHub Pages
- Push seluruh file ke repository.
- Buka Settings → Pages.
- Pilih Deploy from branch.
- Pilih branch `main` dan folder `/root`.
