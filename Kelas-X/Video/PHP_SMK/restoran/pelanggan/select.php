<?php
    $jumlahData = $db->rowCOUNT("SELECT idpelanggan FROM tblpelanggan");
    $banyak = 4;
    $halaman = ceil($jumlahData / $banyak);

    if ( isset($_GET["p"]) ) {
        $p = $_GET["p"];
        $mulai = ($p - 1) * $banyak;
    } else {
        $mulai = 0;
    }

    $sql = "SELECT * FROM tblpelanggan ORDER BY pelanggan ASC LIMIT $mulai, $banyak";
    $row = $db->getALL($sql);

    $no = 1 + $mulai;
?>

<div class="float-start me-4">
    <a href="?f=pelanggan&m=insert" class="btn btn-primary" type="button">Tambah Data</a>
</div>

<h3>Pelanggan</h3>

<table class="table table-bordered w-70">
    <thead>
        <tr>
            <th>No</th>
            <th>Pelanggan</th>
            <th>Alamat</th>
            <th>Telp</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($row as $r): ?>
            <tr>
                <?php 
                    if ($r["aktif"]) {
                        $status = "AKTIF";
                    } else {
                        $status = "TIDAK AKTIF";
                    }
                ?>

                <td><?php echo $no++ ?></td>
                <td><?php echo $r["pelanggan"] ?></td>
                <td><?php echo $r["alamat"] ?></td>
                <td><?php echo $r["telp"] ?></td>
                <td><?php echo $r["email"] ?></td>
                <td><a href="?f=pelanggan&m=delete&id=<?php echo $r["idpelanggan"] ?>">Delete</a></td>
                <td><a href="?f=pelanggan&m=update&id=<?php echo $r["idpelanggan"] ?>"><?php echo $status ?></a></td>
            </tr>
        <?php endforeach ?>
    </tbody>
</table>

<?php
    for ($i=1; $i <= $halaman; $i++) { 
        echo '<a href="?f=pelanggan&m=select&p='.$i.'">'.$i.'</a>';
        echo "&nbsp &nbsp &nbsp";
    }
?>