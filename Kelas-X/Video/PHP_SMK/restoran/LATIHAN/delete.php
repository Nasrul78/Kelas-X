<?php 
    require_once "../function.php";

    // $id = 3;

    $sql = "DELETE FROM tblkategori WHERE idkategori = $id";
    $result = mysqli_query($koneksi, $sql);

    header("location:http://localhost/restoran/kategori/select.php");
?>