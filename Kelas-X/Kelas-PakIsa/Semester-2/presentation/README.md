# CORE: Platform Produktivitas dan Alur Kerja Modern

CORE adalah platform produktivitas dan alur kerja (workflow) all-in-one yang dirancang untuk merampingkan proses bisnis, meningkatkan kolaborasi tim, serta mengamankan data penting perusahaan. Solusi ini ditujukan bagi organisasi modern dan kreator yang membutuhkan efisiensi kerja tinggi, kecepatan respons instan, serta integrasi sistem yang aman.

### Komponen Stack Teknologi Utama

*   **Backend (API Server):** Laravel 13 (PHP 8.3+) dengan Laravel Sanctum untuk otentikasi token API.
*   **Frontend (Aplikasi Klien):** React 19, Vite 8, React Router 7, dan Axios untuk komunikasi data.
*   **Mesin Database:** SQLite (default untuk lingkungan pengembangan lokal).
*   **Desain & UI:** Tailwind CSS v4 dengan ikonografi dari Lucide React serta efek Glassmorphism.

---

## Arsitektur & Gambaran Umum Sistem

Aplikasi ini menggunakan model arsitektur Client-Server yang terpisah (decoupled):
1.  **Frontend (/client)** berfungsi sebagai antarmuka pengguna (Single Page Application) yang dibangun menggunakan React 19 dan Vite. Komunikasi ke backend dikelola secara asinkron menggunakan pustaka Axios.
2.  **Backend (/server)** bertindak sebagai RESTful API tanpa status (stateless) yang memproses logika bisnis, mengelola basis data SQLite, dan menangani pengiriman email pemulihan kata sandi melalui protokol SMTP.
3.  **Mekanisme Otentikasi:** Token akses pengguna yang dikeluarkan oleh Laravel Sanctum disimpan di browser menggunakan `localStorage` dengan kunci **ACCESS_TOKEN**. Interseptor Axios pada sisi frontend akan menyisipkan token ini secara otomatis di setiap header HTTP `Authorization: Bearer <token>` untuk permintaan rute terproteksi. Interseptor respons juga akan membersihkan penyimpanan lokal dan mengarahkan pengguna kembali ke halaman masuk jika menerima kode status HTTP 401 (Unauthorized).

### Peta Struktur Direktori Monorepo

```text
.
├── client/                 # Aplikasi Frontend (React 19, Vite 8)
│   ├── public/             # Aset statis frontend
│   ├── src/
│   │   ├── api/            # Konfigurasi Axios dan interseptor
│   │   │   └── axios.js
│   │   ├── components/     # Komponen UI global dan Dashboard
│   │   │   ├── Dashboard/  # Sidebar.jsx, StatCard.jsx
│   │   │   └── ui/         # Button.jsx, Card.jsx, Input.jsx
│   │   ├── context/        # Pengelolaan state (AuthContext.jsx)
│   │   ├── layout/         # Tata letak aplikasi (MainLayout.jsx)
│   │   ├── pages/          # Halaman aplikasi (Dashboard, Home, Login, dll.)
│   │   ├── App.jsx         # Konfigurasi rute React Router 7
│   │   ├── index.css       # File gaya Tailwind CSS v4
│   │   └── main.jsx        # Entry point React
│   ├── package.json
│   └── vite.config.js
└── server/                 # Aplikasi Backend API (Laravel 13, PHP 8.3+)
    ├── app/
    │   ├── Http/
    │   │   └── Controllers/
    │   │       └── AuthController.php # Registrasi, login, reset password
    │   └── Models/
    │       └── User.php    # Model data User
    ├── config/             # Berbagai file konfigurasi Laravel
    ├── database/           # Migrasi basis data dan seeder
    │   └── migrations/     # Tabel users, cache, jobs, personal_access_tokens
    ├── routes/
    │   └── api.php         # Rute API publik & terproteksi (Sanctum)
    ├── .env.example        # Contoh konfigurasi lingkungan backend
    └── composer.json
```

---

## Fitur Utama & Kemampuan Platform

| Fitur / Kemampuan | Backend (Di Balik Layar) | Frontend (Interaksi Pengguna) |
| :--- | :--- | :--- |
| **Otentikasi & Otorisasi** | Mengamankan rute dengan middleware `auth:sanctum`, hashing kata sandi via `Hash::make`, serta pembuatan/penghapusan token akses. | Formulir pendaftaran dan masuk dengan validasi kesalahan respons, penyimpanan token di `localStorage`, serta navigasi otomatis via `ProtectedRoute`. |
| **Pemulihan Kata Sandi** | Membuat token reset unik di tabel `password_reset_tokens` dan mengirimkan email instruksi pemulihan berformat HTML yang elegan menggunakan SMTP. | Formulir permintaan tautan reset (`ForgotPassword.jsx`) dan halaman pengisian kata sandi baru (`ResetPassword.jsx`) menggunakan token dari query string. |
| **Dashboard Ringkasan** | Menyediakan endpoint terproteksi untuk mengambil data sesi pengguna aktif serta informasi profil. | Tampilan dasbor dinamis (`Dashboard.jsx`) dengan kartu statistik (`StatCard.jsx`), daftar aktivitas terbaru, manajemen anggota tim, serta sidebar yang dapat diciutkan (`Sidebar.jsx`). |
| **Antarmuka Responsif** | Mendukung CORS terkonfigurasi untuk membatasi asal permintaan API hanya dari URL frontend. | Desain UI premium menggunakan Tailwind CSS v4 dengan mode gelap (dark base), efek kaca (glassmorphism), dan mikro-animasi pada tombol dan kartu. |

---

## Panduan Antarmuka Frontend

### 1. Alur Kerja Pengguna (User Workflows)

*   **Registrasi & Masuk Baru:** Pengguna mengunjungi halaman utama, menekan tombol pendaftaran, lalu mengisi formulir (nama, email, kata sandi, dan konfirmasi kata sandi). Token Sanctum yang dihasilkan disimpan sebagai **ACCESS_TOKEN** di `localStorage` dan pengguna langsung dialihkan ke rute `/dashboard`.
*   **Manajemen Sesi & Keluar (Logout):** Pengguna terotentikasi dapat mengakses rute terproteksi `/dashboard`. Menekan tombol Logout di bagian bawah sidebar akan memicu fungsi penghapusan token di database backend, membersihkan **ACCESS_TOKEN** dari `localStorage` browser, dan memindahkan navigasi kembali ke halaman `/login`.
*   **Pemulihan Akun:** Jika lupa sandi, pengguna mengakses `/forgot-password` untuk mengirim permintaan tautan reset ke email mereka. Klik tautan dari kotak masuk email akan mengarahkan pengguna ke halaman `/reset-password` di frontend dengan token verifikasi yang disematkan pada URL query string, yang kemudian dikirim kembali bersama sandi baru ke server.

### 2. Tata Letak Antarmuka (Interface Layouts)

*   **Landing Page Layout:** Tampilan modern berlatar belakang gradasi (`bg-mesh`) yang menampilkan statistik pencapaian, tiga pilar fitur utama, testimoni pengguna, dan tiga opsi skema harga (Starter, Pro, Enterprise).
*   **Dashboard Layout:** Tata letak fleksibel menggunakan panel samping navigasi dinamis (`Sidebar.jsx`) di bagian kiri yang dapat disembunyikan/diciutkan untuk memaksimalkan ruang kerja. Header atas menampung fitur pencarian global, notifikasi, dan profil pengguna aktif, sementara area konten utama menyajikan kumpulan widget grafik dan daftar aktivitas.

### 3. Aliran Data & State Aplikasi

*   **Pengelolaan State Global:** Status autentikasi pengguna didistribusikan melalui `AuthContext` di tingkat atas aplikasi untuk mendeteksi status sesi secara real-time.
*   **Sinkronisasi Data:** Frontend memanggil endpoint API secara asinkron dengan Axios. Interseptor request secara otomatis menambahkan token bearer di header otentikasi.
*   **Penanganan Sesi Kadaluarsa:** Jika token terdeteksi tidak valid oleh backend (menghasilkan status HTTP 401), interseptor response Axios akan langsung mendeteksi kesalahan tersebut secara terpusat, menghapus token di penyimpanan lokal, dan mengarahkan navigasi ke `/login`.

---

## Panduan Instalasi & Konfigurasi Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan platform CORE di lingkungan lokal Anda.

### Prasyarat Sistem

Pastikan perangkat Anda telah terpasang beberapa perangkat lunak berikut:
*   **PHP:** Versi 8.3 atau yang lebih baru.
*   **Node.js:** Versi 20 atau yang lebih baru (Disarankan versi LTS).
*   **Composer:** Versi 2.x untuk pengelolaan dependensi PHP.
*   **NPM / Yarn / PNPM:** Sebagai pengelola paket Javascript.
*   **SQLite:** Driver database default yang terintegrasi di PHP.

---

### Konfigurasi Backend (`/server`)

1.  Masuk ke direktori server:
    ```bash
    cd server
    ```

2.  Instal seluruh dependensi pustaka PHP:
    ```bash
    composer install
    ```

3.  Salin file konfigurasi lingkungan:
    ```bash
    cp .env.example .env
    ```

4.  Buat berkas database SQLite kosong:
    ```bash
    touch database/database.sqlite
    ```

5.  Hasilkan kunci enkripsi aplikasi:
    ```bash
    php artisan key:generate
    ```

6.  Jalankan migrasi tabel database beserta data awal (seeders):
    ```bash
    php artisan migrate --seed
    ```

7.  Nyalakan server pengembangan lokal Laravel:
    ```bash
    php artisan serve
    ```
    *Server API backend akan berjalan di URL:* `http://localhost:8000`

---

### Konfigurasi Frontend (`/client`)

1.  Masuk ke direktori client:
    ```bash
    cd ../client
    ```

2.  Instal seluruh dependensi pustaka Node.js:
    ```bash
    npm install
    ```

3.  Jalankan server pengembangan lokal Vite:
    ```bash
    npm run dev
    ```
    *Aplikasi frontend klien akan berjalan di URL:* `http://localhost:5173`

---

### Verifikasi Sistem

Untuk memastikan instalasi berhasil secara menyeluruh:
1.  Buka browser dan akses halaman utama frontend di `http://localhost:5173`.
2.  Lakukan pendaftaran akun baru pada menu pendaftaran untuk memastikan koneksi ke server API backend (`http://localhost:8000`) dan penulisan ke database SQLite berjalan dengan normal.
3.  Pastikan Anda dialihkan dengan sukses ke halaman `/dashboard` setelah proses registrasi atau masuk selesai dilakukan.
