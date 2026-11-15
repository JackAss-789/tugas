# Sentra Minimarket — V7 Kasir Pribadi

**Website:** https://sentra-minimarket-digital.vercel.app/

Ini aplikasi katalog dan kasir tunai untuk satu toko, dijalankan pada **satu perangkat/browser**. Data disimpan secara lokal di browser perangkat tersebut. Fitur offline shell disediakan lewat service worker, tetapi foto produk eksternal dan pustaka Excel mungkin memerlukan internet.

## Cara mulai

1. Buka website di browser, pilih **Produk & Pengaturan**.
2. Gunakan tombol **Ubah harga / stok** pada kartu produk, atau panel Pengaturan, untuk memasukkan **harga dan stok yang benar**; nilai awal hanyalah data contoh.
3. Masukkan produk ke keranjang, buka **Kasir**, dan catat jumlah uang tunai yang benar-benar diterima.
4. Selesaikan pembayaran: struk akan muncul dan voice Bahasa Indonesia akan mencoba menyebut total, nominal diterima, serta kembalian. Gunakan **Tes suara** atau **Ulangi Suara Struk** jika browser memerlukan aktivasi suara.
5. Cetak struk dari browser atau gunakan Save to PDF, pilih kertas 58 atau 80 mm; lihat riwayat pada **Laporan** dan ekspor CSV/XLSX.
6. **Backup data** secara rutin melalui tombol di bagian atas, terutama sebelum pindah perangkat.

## Perubahan V7

- Antarmuka lebih hangat dan sederhana, tanpa label "preview" di foto maupun struk.
- 30 kartu katalog lebih rapi, tombol edit harga dan stok langsung dari kartu.
- Foto Fanta, Better, dan SilverQueen diperbarui dengan referensi kemasan yang lebih tepat; 30 tautan sumber tetap didokumentasikan dalam `PHOTO_SOURCES.csv`.
- Foto eksternal akan mencoba URL alternatif dan menampilkan **ilustrasi cadangan berlabel** jika jaringan/sumber gambar bermasalah. Tidak ada foto produk yang diklaim asli 4K hasil upscaling.
- Struk tunai lebih jelas, suara pembelian tetap ada, dan kuitansi terbaru muncul kembali setelah reload.
- Tampilan seluler diuji agar tidak melebar.

## Batasan penting

- Ini **belum POS produksi multi-perangkat**: tidak ada database bersama, server-side stock validation, akses admin terautentikasi, QRIS resmi, atau verifikasi webhook; **jangan menganggap transaksi QRIS berhasil hanya karena aplikasi tampil**.
- Akun lain yang membuka URL publik memperoleh data lokal **milik browsernya sendiri**; data Anda tidak dibagikan lewat server, namun jangan gunakan pada perangkat umum tanpa pengamanan perangkat.
- Foto produk menggunakan hotlink dari pihak ketiga dan dapat berubah; izin untuk publikasi ulang belum diverifikasi. File `PHOTO_SOURCES.csv` mencatat asal tiap foto.
- Uji browser otomatis memakai mock speech, **bukan** suara pada speaker atau printer fisik; latensi suara 0 ms tidak dapat dijamin.
- Jika perangkat direset, data browser dihapus, atau mode incognito digunakan, transaksi dapat hilang tanpa backup.

## Pengujian V7

- JavaScript syntax `node --check`: PASS.
- Browser headless Chromium desktop + mobile: 30 kartu dan 30 tombol edit, ubah harga/stok, checkout tunai contoh Rp7.500 dibayar Rp10.000, struk Rp2.500 kembalian, speech mock dipanggil, 1 transaksi tampil dalam laporan, tanpa error JavaScript atau horizontal overflow: PASS.
- 30 ilustrasi cadangan muncul saat gambar utama gagal: PASS (pengujian terpisah).
- Integrasi foto URL eksternal dan speaker HP nyata memerlukan pemeriksaan langsung di perangkat dan koneksi pengguna.