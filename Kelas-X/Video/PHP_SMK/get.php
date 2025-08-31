<form action="" method="post">
    Nama:
    <input type="text" name="nama">

    Alamat:
    <input type="text" name="alamat">

    <input type="submit" name="kirim" value="simpan">
</form>

<?php 
    if ( isset($GET["kirim"]) ) {
        $nama = $GET["nama"];
        $alamat = $GET["alamat"];

        echo "Nama: ", $nama, "<br>";
        echo "Alamat: ", $alamat;
    }
?>