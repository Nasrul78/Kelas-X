<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMK Negeri 2 Buduran</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="flex flex-col justify-between h-screen">
    <nav class="text-gray-100 border-b-2 border-blue-300 bg-blue-500/80">
        <div class="container flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <h1 class="text-2xl font-bold">SMK Negeri 2 Buduran</h1>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-col p-4 mt-4 font-medium border md:p-0 border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                    <li>
                        <a href="?page=profil" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Profil</a>
                    </li>
                    <li>
                        <a href="?page=sejarah" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Sejarah</a>
                    </li>
                    <li>
                        <a href="?page=jurusan" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Jurusan</a>
                    </li>
                    <li>
                        <a href="?page=prestasi" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Prestasi</a>
                    </li>
                    <li>
                        <a href="?page=kegiatan" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Kegiatan</a>
                    </li>
                    <li>
                        <a href="?page=kontak" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container flex-1">
        <?php 
            if (isset($_GET['page'])) {
                $isi = $_GET['page'];

                if ($isi == "profil")
                    require_once "pages/profil.php";
                else if ($isi == "sejarah")
                    require_once "pages/sejarah.php";
                else if ($isi == "jurusan")
                    require_once "pages/jurusan.php";
                else if ($isi == "prestasi")
                    require_once "pages/prestasi.php";
                else if ($isi == "kegiatan")
                    require_once "pages/kegiatan.php";
                else if ($isi == "kontak")
                    require_once "pages/kontak.php";
            } else {
                require_once "pages/profil.php";
            }
        ?>
    </main>

        
    <footer class="mt-10 bg-slate-900 text-slate-200">
        <div class="max-w-6xl px-4 py-8 mx-auto">
            <div class="grid gap-6 md:grid-cols-3">
                <div>
                    <h2 class="text-lg font-semibold">SMKN 2 Buduran</h2>
                    <p class="mt-2 text-sm text-slate-400">
                    Sekolah Menengah Kejuruan Negeri 2 Buduran<br>
                    Mencetak lulusan yang kompeten, berkarakter, dan siap kerja.
                    </p>
                </div>

                <div>
                    <h3 class="text-sm font-semibold tracking-wide uppercase text-slate-400">
                    Kontak
                    </h3>
                    <ul class="mt-2 space-y-1 text-sm">
                    <li>Alamat: Buduran, Sidoarjo, Jawa Timur</li>
                    <li>Telepon: (031) 123456</li>
                    <li>Email: <a href="mailto:smkn2buduran@example.sch.id" class="underline hover:text-white">
                        info@smkn2buduran.sch.id
                    </a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-sm font-semibold tracking-wide uppercase text-slate-400">
                        Halaman
                    </h3>
                    <ul class="mt-2 space-y-1 text-sm">
                        <li><a href="?page=profil">Profil</a></li>
                        <li><a href="?page=sejarah">Sejarah</a></li>
                        <li><a href="?page=jurusan">Jurusan</a></li>
                        <li><a href="?page=prestasi">Prestasi</a></li>
                        <li><a href="?page=kegiatan">Kegiatan</a></li>
                        <li><a href="?page=kontak">Kontak</a></li>
                    </ul>
                </div>
            </div>

            <div class="flex flex-col items-center justify-between gap-2 pt-4 mt-6 border-t border-slate-700 md:flex-row">
            <p class="text-xs text-slate-500">
                &copy; 2025 SMKN 2 Buduran. All rights reserved.
            </p>
            <p class="text-xs text-slate-500">
                Dibuat untuk tugas sekolah oleh <span class="font-semibold">Nasrul</span>.
            </p>
            </div>
        </div>
    </footer>
</body>
</html>