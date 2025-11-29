<?php 
    // Array Dimensi

    $nama = array("Andi", "Budi", "Caca", "Dedi", 525, 7.5);

    var_dump($nama);

    echo "<br>";

    echo $nama[5];

    echo "<br>";

    for ($i=0; $i < 6; $i++) { 
        echo $i, " = ";
        echo $nama[$i], "<br>";
    }

    foreach ($nama as $k) {
        echo $k, "<br>";
    }

    // Array Asosiatif

    $nama = array(
        "Andi" => "Bandung",
        "Budi" => "Jakarta",
        "Caca" => "Surabaya",
        "Dedi" => "Malang"
    );

    var_dump($nama);

    echo "<br>";

    echo $nama["Caca"];

    foreach ($nama as $k => $v) {
        echo $k, " = ", $v, "<br>";
    }
?>