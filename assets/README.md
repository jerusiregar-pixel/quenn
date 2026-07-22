# GMA Queen Landing Page — Revisi

Landing page promosi **GMA Affiliate by GarudaQu** untuk **Queen**.

## File utama
- `index.html` → struktur halaman
- `style.css` → tampilan / desain
- `script.js` → link pendaftaran, WhatsApp, video, dan data testimoni
- `assets/poster.jpg` → poster utama
- `assets/legalitas-1.png` s/d `assets/legalitas-4.png` → placeholder foto legalitas

## Yang sudah direvisi
1. Hero CTA dibersihkan (tanpa list "tanpa stok barang" dan tanpa microcopy di bawah tombol).
2. Bagian keluh kesah dibuat mengikuti arahan screenshot: masalah user + panel impian berwarna navy.
3. Ditambahkan section **Kenalan dengan GMA** + preview video YouTube.
4. Bagian "Apa yang ingin dicapai" lama dihapus.
5. Ditambahkan tabel **Perbandingan GMA vs bisnis lain**.
6. Ditambahkan **6 kartu testimoni** dengan tombol video YouTube.
7. Ditambahkan **galeri legalitas** dan FAQ diletakkan di bagian bawah.

## Cara mengganti link penting
Buka `script.js`, lalu ubah bagian berikut:

- `registrationUrl` → isi dengan link daftar resmi Queen
- `whatsappNumber` → nomor WhatsApp Queen
- `whatsappMessage` → pesan default WhatsApp
- `explainerVideo.url` → link video penjelasan GMA
- `testimonials[].videoUrl` → link video testimoni satu per satu
- `testimonials[].name`, `role`, `text`, `highlight` → isi sesuai data asli

## Cara mengganti gambar
- Poster utama: ganti file `assets/poster.jpg`
- Legalitas: ganti file `assets/legalitas-1.png` sampai `assets/legalitas-4.png`

## Hosting
Bisa langsung di-upload ke:
- **GitHub Pages**
- **Vercel**

Tanpa build tools, tanpa framework, cukup static hosting.
