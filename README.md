# Sentra Minimarket — Smart Retail Demo V2

Website statis satu toko, dijalankan dengan membuka `index.html` atau deploy ke Vercel (framework: Other / output root).

## Yang tersedia
- Katalog 30 SKU data contoh, pencarian, kategori, pengurutan, filter stok.
- Kasir tunai simulasi, keranjang, nominal bayar, kembalian, struk cetak (58 mm).
- Antrean Menunggu → Dipanggil → Dilayani → Selesai, panggilan bahasa Indonesia menggunakan Web Speech API.
- Tombol WhatsApp toko nomor +62 857-1497-9430 serta draf konfirmasi transaksi demo, **tidak mengirim pesan otomatis**.
- Laporan transaksi tersimpan lokal, tanggal berdasarkan Asia/Jakarta, top produk, stok rendah, ekspor CSV dan XLSX (XLSX bergantung pada CDN eksternal).
- Admin katalog lokal: tambah, edit, hapus, unggah foto kompresi setelah centang pernyataan hak pakai.
- Backup dan restore JSON data demo, serta reset data contoh.

## Batasan penting
**Bukan aplikasi kasir produksi.** Penyimpanan di `localStorage` browser; tidak ada backend, autentikasi/otorisasi admin, validasi server, sinkronisasi perangkat, backup server, audit log, atau pengamanan transaksi. Harga dan stok hanyalah contoh. **QRIS asli sengaja dinonaktifkan** karena belum ada provider dan verifikasi webhook. Placeholder tidak boleh disamakan dengan foto produk asli berizin. Upload foto hanya untuk konten yang hak publikasinya dimiliki pengelola. Browser Text-to-Speech memerlukan izin interaksi dan tidak bisa menjamin suara tanpa jeda. Hasil uji otomatis browser tidak setara pengujian transaksi produksi atau printer thermal fisik.

## Pengujian manual
1. Buka halaman, tambah produk, cek keranjang dan nominal.
2. Bayar simulasi tunai, cek stok berkurang, struk dan laporan.
3. Filter tanggal laporan, unduh CSV/XLSX.
4. Ambil nomor antrean, aktifkan suara, panggil, ubah status dan selesaikan.
5. Edit harga/stok dan unggah foto hanya jika punya izin, uji reload.
6. Backup JSON, ubah data, restore, lalu verifikasi lagi.

## Lanjutan menuju produksi
Gunakan backend Postgres/Supabase atau setara, role-based access control, server-side transaction commit atomik, audit logs, payment gateway QRIS sandbox dan signature verifier, manajemen aset berizin, dan uji printer/HP asli.