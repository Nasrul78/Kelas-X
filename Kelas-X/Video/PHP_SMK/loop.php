<?php 
    for ($i=1; $i < 12; $i += 2) { 
        echo $i, ", ";
    }

    echo "<br>";

    for ($i=12; $i >= 1; $i -= 2) { 
        echo $i, ", ";
    }

    echo "<br>";

    $a = 1;
    while ($a <= 100) {
        echo $a, ", ";
        $a++;
    }

    echo "<br>";

    $b = 1;
    do {
        echo $b, ", ";
        $b++;
    } while ($b <= 100);
?>