<?php 
    require_once "../function.php";

    $sql = "SELECT * FROM tblkategori";
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

    if ($jumlah > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>", $row["idkategori"], "</td>";
            echo "<td>", $row["kategori"], "</td>";
            echo "</tr>";
        }
    }

    echo "</table>";
?>