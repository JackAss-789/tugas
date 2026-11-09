# tugas — Sentra Mart Digital

Website **Sentra Mart Digital** (prototipe statis satu toko).

## Cara membuka
1. Buka file [index.html](./index.html) atau unduh repositori dan buka file tersebut di browser Chrome/Edge.
2. Pilih produk di beranda, masukkan ke keranjang, lanjutkan ke Kasir.
3. Jalankan pembayaran tunai simulasi, cetak struk, dan cek laporan.
4. Pada halaman Pelayanan, klik **Aktifkan Suara** sebelum memanggil antrean.

## Fitur
- 30 SKU contoh, pencarian, kategori dan keranjang.
- Kasir tunai simulasi, perhitungan kembalian dan struk cetak.
- Antrean dengan browser Text-to-Speech (bahasa Indonesia).
- Draf konfirmasi WhatsApp.
- Laporan CSV dan XLSX (XLSX memuat pustaka dari CDN).
- Admin produk demo.

## Batasan penting
**Belum siap untuk transaksi produksi.** Harga dan stok hanyalah data contoh serta disimpan di `localStorage` browser; tidak ada autentikasi, sinkronisasi antarperangkat, server, database, atau audit log. **QRIS riil belum terintegrasi** dan tidak ada verifikasi webhook pembayaran. Foto produk masih placeholder karena izin sumber gambar belum diverifikasi. Voice TTS tidak dapat dijamin nol latensi. Pengujian end-to-end dan kompatibilitas printer fisik belum dibuktikan.

Pengembangan untuk penggunaan nyata harus menambahkan backend, database, kontrol akses, gambar berizin, QRIS sandbox dengan verifikasi provider, dan pengujian penuh.

## Pembaruan terbaru
- Branding toko: **Sentra Mart** (nama sementara, tanpa identitas pembuat).
- Kontak WhatsApp: tombol chat dan konfirmasi pesanan diarahkan ke nomor toko yang ditetapkan.
- Pencarian, filter stok tersedia, urutkan katalog, dan jumlah hasil.
- Admin demo: ubah produk, stok/harga, dan masukkan URL gambar HTTPS dengan konfirmasi izin pakai.
- Laporan: filter tanggal, produk terlaris, indikator stok menipis, backup JSON.
- Deployment Vercel dilakukan melalui upload file, **bukan** Git integration otomatis.

**Catatan:** tidak ada verifikasi independen terhadap izin gambar yang dimasukkan admin; jangan gunakan URL tanpa izin sah. Seluruh transaksi masih demo localStorage, bukan sistem produksi.
