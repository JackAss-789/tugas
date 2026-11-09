# Sentra Minimarket Digital — Demo V4 (Tugas Sekolah)

Website demo satu toko yang menampilkan 30 SKU dengan foto referensi kemasan, keranjang, kasir tunai simulasi, antrean suara, struk, WhatsApp, laporan CSV/XLSX, dan panel produk berbasis localStorage.

**Website:** https://sentra-minimarket-digital.vercel.app/

## Foto produk
- Katalog menggunakan **30 URL gambar eksternal** dari situs produsen dan penjual, bukan salinan foto yang diunggah ke GitHub.
- Semua foto punya tautan asal dalam [PHOTO_SOURCES.csv](./PHOTO_SOURCES.csv), beserta varian/ukuran yang digunakan untuk pencocokan.
- Tekan gambar produk untuk memperbesar, dan gunakan tautan sumber untuk meninjau asal fotonya.
- Jika situs asal memblokir gambar (hotlink), browser menampilkan placeholder cadangan.
- Gambar ini dipasang untuk demo tugas; **hak publikasinya belum diverifikasi**. Penggunaan untuk tugas sekolah tidak otomatis memberi hak untuk menerbitkan ulang foto pada website publik.

## Penggunaan
Buka `index.html` dalam browser dengan koneksi internet atau gunakan URL Vercel di atas. Pilih item pada katalog, simulasikan pembayaran tunai, cetak struk, lihat laporan, dan coba panggilan antrean setelah mengaktifkan suara browser.

## Batasan penting
- Harga, stok, dan transaksi semuanya **contoh**, disimpan hanya di localStorage perangkat yang digunakan, tanpa database server atau autentikasi aman.
- Pembayaran QRIS sungguhan dan callback provider **belum diimplementasikan**.
- Tombol WhatsApp menyusun pesan ke **085714979430**, bukan pengiriman otomatis.
- Browser Text-to-Speech dapat memiliki jeda; nol latensi tidak dapat dijamin.
- Ekspor XLSX memerlukan pustaka CDN pihak ketiga.
- Versi ini **belum layak untuk transaksi produksi**.

## Bukti teknis
- HTML dikirim ke GitHub dan Vercel; deployment Vercel `READY`.
- Syntax JavaScript lolos `node --check`.
- Uji browser live menemukan 30 kartu foto dan zoom produk pertama berfungsi; satu foto eksternal dilaporkan gagal dimuat pada sesi itu dan perlu ditinjau.
- Alur transaksi menyeluruh pada rilis V4 belum diverifikasi ulang terhadap deployment baru.
