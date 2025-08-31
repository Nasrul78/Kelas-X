<?php 
    $hari = 3;

    switch ($hari) {
        case '1':
            echo "Senin";
            break;
        case '2':
            echo "Selasa";
            break;
        case '3':
            echo "Rabu";
            break;
        case '4':
            echo "Kamis";
            break;
        case '5':
            echo "Jumat";
            break;
        case '6':
            echo "Sabtu";
            break;
        case '7':
            echo "Minggu";
            break;
        default:
            echo "Tidak ada hari";
            break;
    }

    $pilihan = "tambah";

    switch ($pilihan) {
        case 'tambah':
            echo "Anda memilih tambah";
            break;
        case 'ubah':
            echo "Anda memilih ubah";
            break;
        case 'hapus':
            echo "Anda memilih hapus";
            break;
        default:
            echo "Pilihan tidak ada";
            break;
    }
?>