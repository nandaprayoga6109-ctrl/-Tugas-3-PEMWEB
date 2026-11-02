GienMarketplace adalah aplikasi marketplace sederhana berbasis web yang dikembangkan menggunakan Node.js, Express.js, EJS, dan MySQL. Aplikasi ini memungkinkan pengguna mengelola informasi produk melalui fitur CRUD (Create, Read, Update, Delete).

Proyek ini dibuat sebagai implementasi pengembangan aplikasi web dengan arsitektur MVC, pengelolaan database relasional, prepared statements, dan pola Post-Redirect-Get (PRG).

📌 Fitur Utama

Create: Menambahkan produk baru ke dalam database.

Read: Menampilkan daftar produk yang tersimpan di database.

Update: Mengubah informasi produk yang sudah tersedia.

Delete: Menghapus produk berdasarkan ID.

Kategori Produk: Kendaraan, Barang Elektronik, dan Peralatan Rumah.

Informasi Produk: Nama barang, harga, kondisi, deskripsi, lokasi, dan nama penjual.

Foto Produk: Mendukung unggahan foto produk dengan penyimpanan data gambar dalam database MySQL.

Database Connection Pool: Menggunakan MySQL Connection Pool untuk pengelolaan koneksi database.

Prepared Statements: Menggunakan parameter query untuk membantu mencegah SQL injection.

Post-Redirect-Get (PRG): Menggunakan redirect setelah pemrosesan formulir untuk mengurangi risiko pengiriman ulang formulir.

Template EJS: Memisahkan tampilan halaman dari logika pemrosesan aplikasi.

🛠️ Teknologi yang Digunakan

Teknologi

Kegunaan

Node.js

Menjalankan JavaScript pada sisi server

Express.js

Mengelola server, routing, dan request HTTP

EJS

Menampilkan halaman web secara dinamis

MySQL

Menyimpan data produk

MySQL2

Menghubungkan aplikasi dengan database MySQL

HTML

Menyusun struktur halaman web

CSS

Mengatur tampilan dan desain antarmuka

Multer

Memproses unggahan foto produk

dotenv

Mengelola konfigurasi melalui environment variables

📂 Struktur Folder

GienMarketplace/
├── config/
│   └── database.js
├── controllers/
│   └── barang.controller.js
├── models/
│   └── barang.model.js
├── routes/
│   └── barang.routes.js
├── views/
│   ├── layouts/
│   └── pages/
│       ├── barang-list.ejs
│       └── barang-form.ejs
├── public/
│   └── css/
│       └── style.css
├── .env
├── .env.example
├── .gitignore
├── database.sql
├── package.json
├── package-lock.json
├── server.js
└── README.md

Penjelasan Struktur

config/database.js
Mengatur koneksi database MySQL menggunakan mysql2/promise dan Connection Pool.

controllers/barang.controller.js
Menangani logika aplikasi, termasuk proses penambahan, penampilan, pengubahan, dan penghapusan data barang.

models/barang.model.js
Menangani interaksi dengan database melalui query SQL.

routes/barang.routes.js
Mengatur routing aplikasi dan pemrosesan unggahan foto produk.

views/layouts/
Menyimpan template layout yang digunakan oleh halaman aplikasi.

views/pages/
Menyimpan halaman EJS untuk menampilkan daftar barang dan formulir barang.

public/css/style.css
Menyimpan stylesheet untuk mengatur tampilan aplikasi.

database.sql
Berisi SQL untuk menyiapkan database dan tabel aplikasi.

server.js
Menjadi titik masuk aplikasi untuk konfigurasi Express dan menjalankan server.

⚙️ Persyaratan Sistem

Sebelum menjalankan aplikasi, pastikan perangkat telah memiliki:

Node.js

MySQL Community Server

Git

Editor kode, seperti Visual Studio Code

🚀 Instalasi dan Menjalankan Aplikasi

1. Clone Repository

Jalankan perintah berikut di terminal:

git clone URL_REPOSITORY_KAMU

Masuk ke folder proyek:

cd GienMarketplace

Ganti URL_REPOSITORY_KAMU dengan URL repository GitHub milikmu.

2. Instal Dependensi

Jalankan perintah:

npm install

Perintah tersebut akan memasang dependensi yang tercantum dalam package.json.

3. Siapkan Database MySQL

Jalankan MySQL Server.

Buka MySQL Workbench atau aplikasi pengelola MySQL lainnya.

Buka file database.sql.

Jalankan SQL di dalam file tersebut untuk membuat database dan tabel yang diperlukan.

Pastikan database yang dibuat sesuai dengan nama database pada konfigurasi aplikasi.

4. Konfigurasi Environment Variables

Buat file .env di direktori utama proyek berdasarkan struktur .env.example.

Contoh konfigurasi:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_mysql_kamu
DB_NAME=gien_marketplace
PORT=3000

Sesuaikan nilai DB_USER dan DB_PASSWORD dengan konfigurasi MySQL pada perangkatmu.

Penting: File .env berisi konfigurasi lokal dan informasi sensitif. Jangan mengunggahnya ke repository publik. Gunakan .env.example sebagai contoh konfigurasi tanpa password asli.

5. Jalankan Aplikasi

Untuk menjalankan aplikasi:

npm start

Atau, jika ingin menggunakan mode pengembangan dengan Node.js Watch Mode:

npm run dev

Setelah server berhasil dijalankan, buka browser dan akses:

http://localhost:3000

Jika koneksi database dan server berhasil, aplikasi GienMarketplace dapat digunakan melalui browser.

🗄️ Database

Aplikasi menggunakan database MySQL dengan nama gien_marketplace dan tabel utama barang.

Data produk mencakup informasi berikut:

Kolom

Keterangan

id

ID unik produk

nama_barang

Nama produk

kategori

Kategori produk

harga

Harga produk

kondisi

Kondisi barang

deskripsi

Deskripsi produk

lokasi

Lokasi penjual atau barang

nama_penjual

Nama penjual

foto

Data foto produk dalam format biner

tipe_foto

Tipe MIME foto, misalnya image/jpeg

created_at

Waktu pencatatan data

Kolom foto menggunakan tipe data LONGBLOB untuk menyimpan data gambar di dalam database MySQL.

🔐 Keamanan dan Pengelolaan Data

Beberapa pendekatan yang diterapkan dalam proyek ini meliputi:

Environment Variables — konfigurasi koneksi database dipisahkan ke dalam file .env.

Prepared Statements — parameter query dipisahkan dari perintah SQL untuk membantu mengurangi risiko SQL injection.

MySQL Connection Pool — koneksi database dikelola menggunakan Connection Pool.

Git Ignore — file konfigurasi sensitif seperti .env tidak seharusnya diunggah ke repository publik.

Validasi Unggahan Foto — aplikasi membatasi ukuran dan tipe MIME foto sesuai konfigurasi upload yang diterapkan.

Catatan: Prepared statements dan pembatasan tipe file merupakan bagian dari upaya meningkatkan keamanan, tetapi tidak menggantikan seluruh kebutuhan validasi input dan pengamanan aplikasi.

🧩 Arsitektur Aplikasi

GienMarketplace menerapkan pendekatan Model-View-Controller (MVC) untuk memisahkan tanggung jawab kode.

Alur kerja aplikasi secara umum:

Pengguna
   │
   ▼
Browser / EJS View
   │
   ▼
Express Routes
   │
   ▼
Controller
   │
   ▼
Model
   │
   ▼
MySQL Database

Model bertanggung jawab terhadap interaksi database, controller memproses logika aplikasi, dan view menyajikan informasi kepada pengguna.

Untuk operasi formulir, aplikasi juga menerapkan pola Post-Redirect-Get (PRG) dengan melakukan redirect setelah permintaan POST berhasil diproses.

🎥 Video Demonstrasi

Video demonstrasi proyek menjelaskan struktur aplikasi, konfigurasi database, implementasi CRUD, penggunaan prepared statements, dan pola Post-Redirect-Get.

Link video YouTube:
https://youtu.be/Q-5LTiIpAyc?si=5ozlmBb2rpt0zpyZ

👨‍💻 Pengembang

Nama: I Gusti Agung Agatha Nanda Prayoga
Program Studi: Teknologi Informasi
Universitas: Universitas Pendidikan Nasional (Undiknas)

📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan penyelesaian tugas pengembangan aplikasi web.
