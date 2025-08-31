<?php 
    $nama = array("Andi", "Budi", "Caca", "Dedi", 525, 7.5);

    var_dump($nama);
    echo "<br>";

    foreach ($nama as $key) {
        echo $key, "<br>";
    }

    $nama = array(
        "Andi" => "Bandung",
        "Budi" => "Jakarta",
        "Caca" => "Surabaya",
        "Dedi" => "Malang"
    );

    var_dump($nama);
    echo "<br>";

    foreach ($nama as $k => $v) {
        echo $k, " = ", $v, "<br>";
    }
?>