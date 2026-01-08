<?php
    $nama = "SMP Sepuluh Nopember Sidoarjo";
    $judul = ["SMP", "Sepuluh Nopember", "Sidoarjo"];
    $deskripsi = "Sekolah berbasis 4 bahasa asing";
    $warna_judul = ["#2B2B2B", "#F37335", "#575757"];
    $slogan = "./images/slogan-spuber.png";
    $nav = ["Home", "Profil", "Kegiatan", "Prestasi", "Jadwal"];
    $hero_image = "./images/hero.png";
    $profil = [
        "fasilitas" => [
            "Ruang Kelas BerAC",
            "Perpustakaan",
            "Laboratorium IPA",
            "Gedung Serba Guna",
            "Lapangan Futsal",
            "Parkiran Luas",
            "Kantin yang Bersih",
            "Masjid",
            "Ruang Podcast",
            "Ruang Konseling",
        ],
        "visimisi" => [
            "Terwujudnya Peserta Didik Yang Memiliki budi Pekerti Luhur, IMTAQ, IPTEK, Terampil, Dan Mampu Bersaing di Era Global",
            [
                "Mewujudkan peserta didik yang berbudi pekerti luhur.",
                "Mewujudkan peserta didik yang beriman dan bertaqwa.",
                "Melaksanakan peserta didik yang berkompeten di bidang akademik dan non akademik.",
                "Mewujudkan peserta didik yang mampu bersaing di Tingkat nasional dan internasional.",
                "Mewujudkan pembelajaran yang berbasis teknologi",
                "Mewujudkan peserta didik terampil dalam berbahasa asing (Bahasa inggris, Mandarin, Jepang, dan Arab).",
                "Mewujudkan sekolah berbasis Bahasa asing (Bahasa inggris, Mandarin, Jepang, dan Arab).",
            ]
        ],
        "bahasa" => [
            "Bahasa Arab",
            "Bahasa Mandarin",
            "Bahasa Inggris",
            "Bahasa Jepang",
        ]
        ];
    $judul_profil = ["Profil Sekolah", "Fasilitas Sekolah Kami", "Visi dan Misi Kami", "4 Bahasa Asing"];
    $profil_images = [
        "fasilitas" => "./images/lapangan-0.jpg",
        "visimisi" => "./images/lapangan-1.png",
        "bahasa" => ["./images/arab.png", "./images/china.png", "./images/english.png", "./images/japan.png"]
    ];
    $kegiatan = [
        [
            "judul" => "SMP Sepuluh Nopember Sidoarjo Gelar Khitan Massal Meriahkan Anniversary ke-14",
            "img" => "./images/berita-0.jpg",
        ],
        [
            "judul" => "SPUBER Road to Anniversary 14th Mengukir Sejarah dan Kenangan setiap Tahunnya",
            "img" => "./images/berita-1.jpg",
        ]
    ];
    $prestasi = [
        "Juara 1 Lomba Futsal antar kelas di SMPN 2 Sukodono",
        "Juara 1 Lomba Voli antar kelas pada Class Meeting Semester Ganjil",
        "Juara 2 Lomba Pidato Bahasa Indonesia tingkat sekolah",
        "Juara 1 Lomba Story Telling Bahasa Inggris tingkat sekolah",
        "Juara 1 Lomba Poster Pendidikan Karakter tingkat sekolah",
        "Juara Harapan 1 Lomba Menyanyi Solo dalam acara Pentas Seni SMPN 2 Buduran",
        "Juara 2 Lomba Tari Tradisional antar kelas di SMP PGRI 1 Sidoarjo",
    ];
    $jadwal = [
        "Senin" => [
            "06.45" => "Istighosah",
            "07.00" => "Bahasa Inggris", 
            "08.00" => "Bahasa Inggris",
            "09.00" => "Matematika",
            "10.00" => "Matematika",
            "11.00" => "Matematika",
            "12.00" => "Istirahat",
            "13.00" => "PAI",
            "14.00" => "PAI",
            "15.00" => "PAI",
        ],
        "Selasa" => [
            "06.45" => "Istighosah",
            "07.00" => "Olahraga", 
            "08.00" => "Olahraga",
            "09.00" => "Olahraga",
            "10.00" => "Bahasa Mandarin",
            "11.00" => "Bahasa Jawa",
            "12.00" => "Istirahat",
            "13.00" => "Bahasa Indonesia",
            "14.00" => "Bahasa Indonesia",
            "15.00" => "Bahasa Indonesia",
        ],
        "Rabu" => [
            "06.45" => "Istighosah",
            "07.00" => "Informatika", 
            "08.00" => "Informatika",
            "09.00" => "Bahasa Arab",
            "10.00" => "BK",
            "11.00" => "Bahasa Jepang",
            "12.00" => "Istirahat",
            "13.00" => "IPA",
            "14.00" => "IPA",
            "15.00" => "IPA",
        ],
        "Kamis" => [
            "06.45" => "Istighosah",
            "07.00" => "IPS", 
            "08.00" => "IPS",
            "09.00" => "Seni Budaya",
            "10.00" => "Seni Budaya",
            "11.00" => "Pendidikan Pancasila",
            "12.00" => "Istirahat",
            "13.00" => "Pendidikan Pancasila",
            "14.00" => "PAI",
            "15.00" => "PAI",
        ],
        "Jumat" => [
            "06.45" => "Istighosah",
            "07.00" => "Pembiasaan Jum'at", 
            "08.00" => "Bahasa Inggris",
            "09.00" => "Bahasa Inggris",
            "10.00" => "Matematika",
            "11.00" => "Matematika",
            "12.00" => "Istirahat",
            "13.00" => "Pramuka",
            "14.00" => "Pramuka",
            "15.00" => "Pramuka",
        ]
    ]
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $nama ?></title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>    
    <nav class="container sticky top-0 w-full bg-white border-b border-default">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <a href="<?= $nav[0] ?>" class="flex items-center">
                <img src="<?= $slogan ?>" class="h-12" alt="Logo Spuber" />
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 font-medium border md:p-0 border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                    <a href="#<?= $nav[0] ?>" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><?= $nav[0] ?></a>
                </li>
                <li>
                    <a href="#<?= $nav[1] ?>" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><?= $nav[1] ?></a>
                </li>
                <li>
                    <a href="#<?= $nav[2] ?>" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><?= $nav[2] ?></a>
                </li>
                <li>
                    <a href="#<?= $nav[3] ?>" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><?= $nav[3] ?></a>
                </li>
                <li>
                    <a href="#<?= $nav[4] ?>" class="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><?= $nav[4] ?></a>
                </li>
            </ul>
            </div>
        </div>
    </nav>

    <header class="container p-12 pt-0 text-center" id="<?= $nav[0] ?>">
        <img class="w-full" src="<?= $hero_image ?>" alt="">

        <h1 class="mt-16 text-5xl font-bold text-[<?= $warna_judul[0] ?>]">
            <?= $judul[0] ?> <span class="text-[<?= $warna_judul[1] ?>]"> <?= $judul[1] ?></span> <?= $judul[2] ?>
        </h1>
        <h2 class="text-3xl mb-4 text-[<?= $warna_judul[2] ?>]"><?= $deskripsi ?></h2>
    </header>    

    <section class="container p-12 text-center" id="<?= $nav[1] ?>">
        <h1 class="mb-4 text-5xl font-bold"><?= $judul_profil[0] ?></h1>

        <article class="flex w-full mt-8">
            <div class="flex flex-col items-center flex-1">
                <h2 class="mb-2 text-4xl font-semibold"><?= $judul_profil[1] ?></h2>
                <img src="<?= $profil_images["fasilitas"] ?>" class="w-9/10 rounded-xl" alt="">
            </div>
            
            <ul class="flex-1 mt-8">
                <?php
                    foreach ($profil["fasilitas"] as $item) {
                        echo "<li class='m-2 text-2xl'>" . $item . "</li>";
                    }
                ?>
            </ul>
        </article>

        <article class="flex w-full mt-8">
            <div class="flex-1 mt-12">
                <p class="text-md"><?= $profil["visimisi"][0] ?></p>
                <ul class="mt-8 text-left list-disc">
                    <?php
                        foreach ($profil["visimisi"][1] as $item) {
                            echo "<li class='m-2 text-md'>" . $item . "</li>";
                        }
                    ?>
                </ul>
            </div>
                
            <div class="flex flex-col items-center flex-1">
                <h2 class="mb-2 text-4xl font-semibold"><?= $judul_profil[2] ?></h2>
                <img src="<?= $profil_images["visimisi"] ?>" class="rounded-full w-7/10" alt="">
            </div>
        </article>


        <article class="flex flex-col items-center justify-center w-full mt-8">
            <h2 class="mb-2 text-4xl font-semibold"><?= $judul_profil[3] ?></h2>

            <ul class="flex w-full mt-12 text-center justify-evenly">
                <?php
                    $count = 0;
                    foreach ($profil["bahasa"] as $item) {
                        echo '<div class="flex flex-col items-center m-2">';
                        echo "<li class='text-lg font-semibold'>" . $item . "</li>";
                        echo "<img src='" . $profil_images["bahasa"][$count] . "'>";
                        echo "</div>";
                        $count++;
                    }
                ?>
            </ul>
        </article>
    </section>

    <section class="container p-12 text-center" id="<?= $nav[2] ?>">
        <h1 class="mb-4 text-5xl font-bold"><?= $nav[2] ?></h1>
        
        <ul class="flex justify-evenly">
            <?php
                for ($i = 0; $i < count($kegiatan); $i++) {
                    echo '<li class="block max-w-sm border shadow-xs bg-neutral-primary-soft rounded-xl">';
                    echo '<a href="#">';
                    echo '<img class="object-cover w-full h-64 rounded-t-xl" src="' . $kegiatan[$i]["img"] . '" alt="" />';
                    echo '</a>';
                    echo '<div class="p-6 text-center">';
                    echo '<a href="#">';
                    echo '<h5 class="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">' . $kegiatan[$i]["judul"] . '</h5>';
                    echo '</a>';
                    echo '<a href="#" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">';
                    echo 'Read more';
                    echo '<svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>';
                    echo '</a>';
                    echo '</div>';
                    echo '</li>';
                }
            ?>
        </ul>
    </section>

    <section class="container p-12 text-center" id="<?= $nav[3] ?>">
        <h1 class="mb-4 text-5xl font-bold"><?= $nav[3] ?></h1>

        <ul class="flex flex-col items-center mt-8 text-left list-disc">
            <?php
                foreach ($prestasi as $item) {
                    echo "<li class='m-2 text-2xl'>" . $item . "</li>";
                }
            ?>
        </ul>
    </section>

    
    <section class="container p-12 text-center" id="<?= $nav[4] ?>">
        <h1 class="mb-4 text-5xl font-bold"><?= $nav[4] ?></h1>

        <div class="bg-white shadow-sm table-wrap">
            <table class="min-w-full border-collapse table-auto">
                <thead class="bg-indigo-400">
                    <tr class="text-sm text-left text-gray-600">
                        <th class="p-2">Hari</th>
                        <th class="p-2">06.45</th>
                        <th class="p-2">07.00</th>
                        <th class="p-2">08.00</th>
                        <th class="p-2">09.00</th>
                        <th class="p-2">10.00</th>
                        <th class="p-2">11.00</th>
                        <th class="p-2">12.00</th>
                        <th class="p-2">13.00</th>
                        <th class="p-2">14.00</th>
                        <th class="p-2">15.00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2">Senin</td>
                        <td class="p-2"><?= $jadwal["Senin"]["06.45"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["07.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["08.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["09.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["10.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["11.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["12.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["13.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["14.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Senin"]["15.00"] ?></td>
                    </tr>
                    <tr>
                        <td class="p-2">Selasa</td>
                        <td class="p-2"><?= $jadwal["Selasa"]["06.45"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["07.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["08.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["09.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["10.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["11.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["12.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["13.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["14.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Selasa"]["15.00"] ?></td>
                    </tr>
                    <tr>
                        <td class="p-2">Rabu</td>
                        <td class="p-2"><?= $jadwal["Rabu"]["06.45"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["07.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["08.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["09.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["10.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["11.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["12.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["13.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["14.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Rabu"]["15.00"] ?></td>
                    </tr>
                    <tr>
                        <td class="p-2">Kamis</td>
                        <td class="p-2"><?= $jadwal["Kamis"]["06.45"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["07.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["08.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["09.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["10.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["11.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["12.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["13.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["14.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Kamis"]["15.00"] ?></td>
                    </tr>
                    <tr>
                        <td class="p-2">Jum'at</td>
                        <td class="p-2"><?= $jadwal["Jumat"]["06.45"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["07.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["08.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["09.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["10.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["11.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["12.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["13.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["14.00"] ?></td>
                        <td class="p-2"><?= $jadwal["Jumat"]["15.00"] ?></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</body>
</html>