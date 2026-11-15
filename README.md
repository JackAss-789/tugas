# Sentra Minimarket Digital V5 — Demo Tugas Sekolah

Website demo: https://sentra-minimarket-digital.vercel.app/

## Kasir dan struk bersuara
Pilih barang di katalog, buka Kasir, masukkan uang diterima lalu tekan **Simpan Transaksi Tunai Demo**. Sesudah data tersimpan, Web Speech API akan mencoba mengucapkan total tagihan, uang diterima, kembalian, dan terima kasih dalam Bahasa Indonesia. Tombol **Tes suara** membantu mengaktifkan suara browser lebih dulu, dan **Ulangi Suara Struk** memutar ulang; gunakan kontrol kecepatan atau matikan suara otomatis sesuai kebutuhan. TTS tergantung perangkat/browser, jadi latensi 0 tidak dapat dijamin.

## Fitur
- 30 produk contoh dengan foto referensi eksternal dan zoom
- Katalog, kategori, pencarian, keranjang dan stok demo
- Kasir tunai simulasi, diskon nominal, pajak simulasi opsional, dan kembalian
- Struk transaksi, cetak lewat browser (58 mm / 80 mm) dan Save to PDF dari dialog cetak
- Riwayat transaksi, pembatalan demo satu kali dengan pengembalian stok serta omzet bersih
- Laporan CSV/XLSX (XLSX membutuhkan CDN), daftar produk terlaris, stok rendah
- Suara antrean Bahasa Indonesia, ambil nomor, panggil ulang, layani, selesai
- WhatsApp penyusunan pesan ke 085714979430 (pengguna mengirim sendiri)
- Admin produk demo, unggah gambar, cadangan dan pemulihan JSON di browser

## Bukti uji V5
Node --check PASS. Playwright Chromium in-memory PASS untuk 30 produk, transaksi contoh: subtotal Rp5.000, diskon Rp1.000, pajak contoh 11% Rp440, total Rp4.440, bayar Rp10.000, kembali Rp5.560; struk, event suara, replay, 80 mm, pembatalan satu kali, laporan bersih Rp0, data persisten pada localStorage dan panggilan antrean; tidak ada JavaScript runtime error. **Pengujian suara menggunakan mock SpeechSynthesis, bukan uji suara fisik speaker**. Audio di Android/iOS, printer fisik, dan alur QRIS real belum diuji.

## Batasan yang belum selesai
Ini bukan POS produksi: harga/stok hanya simulasi, transaksi tersimpan pada localStorage browser tanpa database bersama, autentikasi dan keamanan backend. **QRIS riil, webhook sah dan refund dana nyata belum terintegrasi**; opsi QRIS dinonaktifkan alih-alih berpura-pura berhasil. Foto produk eksternal bisa gagal dimuat, dan izin publikasi sumber belum terverifikasi (lihat PHOTO_SOURCES.csv). Jangan gunakan untuk menerima pembayaran sungguhan.
