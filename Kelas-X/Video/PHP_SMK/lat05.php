<?php
    $tanggal = 32;

    // $hasil = $tanggal < 32;

    if ($tanggal < 32) {
        if ($tanggal > 0) {
            echo "Tanggal benar";
        } else {
            echo "Tanggal salah";
        }
    } else {
        echo "Tanggal salah";
    }

    echo "<br>";

    $nilai = 85;

    if ($nilai <= 100) {
        if ($nilai >= 0) {
            echo "Nilai benar";
        } else {
            echo "Nilai salah";
        }
    } else {
        echo "Nilai salah";
    }

    echo "<br>";

    if ($nilai >= 0 && $nilai <= 100) {
        echo "Nilai benar";
    } else {
        echo "Nilai salah";
    }

    echo "<br>";

    if ($nilai >= 100 || $nilai <= 0) {
        echo "Nilai salah";
    } else {
        echo "Nilai benar";
    }
?>