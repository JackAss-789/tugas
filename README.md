# Sentra Minimarket — Versi Pribadi V6

Website: https://sentra-minimarket-digital.vercel.app/

## Akses pribadi
Website Vercel harus dilindungi oleh **Vercel Authentication** untuk akun pemilik yang tergabung dalam team proyek; jangan menganggap kode PIN di browser sebagai proteksi autentikasi. Akses bisa meminta login Vercel. Jika Anda menjalankan `index.html` dari ZIP di komputer sendiri, tidak ada autentikasi jaringan karena ini murni file lokal. Kode sumber pada GitHub belum tentu bersifat privat.

## Penggunaan pertama
1. Login ke Vercel untuk membuka alamat situs, atau buka ZIP lokal.
2. Di **Produk & Pengaturan**, atur nama toko dan nomor WhatsApp, lalu koreksi harga dan stok **semua produk yang akan dipakai**. Katalog awal menggunakan harga/stok ilustrasi, bukan harga toko sungguhan.
3. Masuk **Beranda**, pilih barang dan tekan **Kasir**. Pembayaran tunai simulasi menghitung kembalian, mengurangi stok lokal, menyimpan struk dan catatan laporan.
4. Tekan **Tes suara** sekali agar browser bisa mengaktifkan TTS, lalu saat transaksi disimpan total, nominal uang dan kembalian dibacakan. Suara tergantung dukungan browser dan pengaturan perangkat; tidak ada jaminan nol delay.
5. Gunakan **Cetak / Simpan PDF** melalui dialog printer atau **Laporan** untuk ekspor CSV/XLSX.
6. Unduh **Backup data JSON** rutin setelah transaksi dari tombol cepat di header. Data hanya tersimpan di browser/perangkat masing-masing, tidak sinkron antarperangkat; membersihkan data browser dapat menghapusnya.
7. Pada Chrome/Edge, tombol **Pasang aplikasi** dapat muncul untuk menambahkan aplikasi ke layar utama; bila tidak muncul, gunakan menu browser **Tambahkan ke Layar Utama**. Offline shell tersedia setelah berkunjung dalam keadaan login dan tersambung internet; foto produk eksternal, font, dan XLSX CDN dapat tetap membutuhkan internet.

## Batasan
- Ini alat lokal untuk **penggunaan pribadi/tugas dan transaksi tunai yang dicatat manual**, bukan sistem POS aman siap produksi. Tidak ada database bersama atau autentikasi aplikasi tersendiri, audit server, dan transaksi tidak aman dari pengubahan data di browser.
- QRIS nyata, webhook pembayaran, pembayaran elektronik, refund uang sungguhan, dan sinkronisasi otomatis tidak tersedia; tidak ada status lunas QRIS palsu.
- Sebagian foto produk berasal dari URL pihak ketiga yang dapat gagal/hilang; hak publikasinya belum terverifikasi, lihat `PHOTO_SOURCES.csv`.
- Browser Text-to-Speech dan printer fisik perlu diverifikasi pada perangkat yang digunakan.

## Pengujian
V6: Playwright Chromium (set_content) PASS: 30 produk, checkout tunai, diskon/pajak, pembatalan, suara mock, antrean, pengaturan toko, WhatsApp format, backup, dan layout seluler tanpa overflow; tidak ada error JS. Instalasi PWA, suara fisik, printer fisik, dan proteksi Vercel diverifikasi terpisah.