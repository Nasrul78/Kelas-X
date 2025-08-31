<?php 
    session_start();
    echo $_SESSION["user"], "<br>";
    echo $_SESSION["nama"], "<br>";
    echo $_SESSION["alamat"], "<br>";
    foreach($_SESSION as $key => $value) {
        echo $key, " : ", $value, "<br>";
    }
?>