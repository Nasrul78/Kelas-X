<?php
    // Operator Aritmatika
    $a = 10;
    $b = 3;

    $c = $a + $b; // Penjumlahan
    echo "Hasil $a + $b = $c", "<br>";

    $c = $a - $b; // Pengurangan
    echo "Hasil $a - $b = $c", "<br>";

    $c = $a * $b; // Perkalian
    echo "Hasil $a * $b = $c", "<br>";

    $c = $a / $b; // Pembagian
    echo "Hasil $a / $b = $c", "<br>";
    echo "Hasil Atas $a / $b = ", ceil($c), "<br>";
    echo "Hasil Terdekat $a / $b = ", round($c), "<br>";
    echo "Hasil Bawah $a / $b = ", floor($c), "<br>";

    $c = $a % $b; // Modulus
    echo "Hasil $a % $b = $c", "<br><br>";

    // Operator Logika
    $c = $a > $b; // Lebih besar
    echo "$a > $b = $c", "<br>";

    $c = $a < $b; // Lebih kecil
    echo "$a < $b = $c", "<br>";

    $c = $a == $b; // Sama dengan
    echo "$a == $b = $c", "<br>";

    $c = $a != $b; // Tidak sama dengan
    echo "$a != $b = $c", "<br><br>";

    // Increment & Decrement
    $a++; // Increment
    echo "Nilai a sekarang = $a", "<br>";

    $b--; // Decrement
    echo "Nilai b sekarang = $b", "<br><br>";

    // Operator String
    $kota = "Jakarta";
    $daerah = "Barat";

    $hasil = $kota . " " . $daerah; // Penggabungan string
    $hasil .= ", Indonesia";
    echo $hasil;
?>