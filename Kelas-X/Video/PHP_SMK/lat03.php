<?php
    function belajar() {
        echo "Saya belajar PHP";
    }

    function luasSegitiga($a = 5, $t = 3) {
        $luas = 0.5 * $a * $t;
        echo $luas;
    }

    function luas($a = 5, $t = 3) {
        $luas = 0.5 * $a * $t;
        return $luas;
    }

    function output() {
        return "Belajar PHP";
    }

    echo luas(100, 3) * 5;
?>