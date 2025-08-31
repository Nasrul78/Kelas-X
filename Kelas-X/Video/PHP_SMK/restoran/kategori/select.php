<div style="margin: auto; width: 900px;">

<h3><a href="http://localhost/restoran/kategori/insert.php">Tambahkan Data</a></h3>

<?php 
    require_once "../function.php";

    $sql = "SELECT idkategori FROM tblkategori";
    $result = mysqli_query($koneksi, $sql);
    $jumlahData = mysqli_num_rows($result);

    $banyak = 3;
    $halaman = ceil($jumlahData / $banyak);

    for ($i=1; $i <= $halaman; $i++) { 
        echo '<a href="?p='.$i.'">'.$i.'</a>'."&nbsp &nbsp &nbsp";
    }

    echo "<br><br>";

    if ( isset($_GET["p"]) ) {
        $p = $_GET["p"];
        $mulai = ($p - 1) * $banyak;
    } else {
        $mulai = 0;
    }
    
    $sql = "SELECT * FROM tblkategori LIMIT $mulai, $banyak";
    $result = mysqli_query($koneksi, $sql);
    // var_dump($result);

    $jumlah = mysqli_num_rows($result);
    // echo "<br>", "Jumlah Data : ", $jumlah, "<br>";

    echo '
    <table border="1px">
    <tr>
        <th>No</th>
        <th>kategori</th>
    </tr>
    ';

    $no = $mulai + 1;

    if ($jumlah > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>", $no++, "</td>";
            echo "<td>", $row["kategori"], "</td>";
            echo "</tr>";
        }
    }

    echo "</table>";
?>

</div>