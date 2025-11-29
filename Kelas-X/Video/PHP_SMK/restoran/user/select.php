<?php
    $jumlahData = $db->rowCOUNT("SELECT iduser FROM tbluser");
    $banyak = 4;
    $halaman = ceil($jumlahData / $banyak);

    if ( isset($_GET["p"]) ) {
        $p = $_GET["p"];
        $mulai = ($p - 1) * $banyak;
    } else {
        $mulai = 0;
    }

    $sql = "SELECT * FROM tbluser ORDER BY user ASC LIMIT $mulai, $banyak";
    $row = $db->getALL($sql);

    $no = 1 + $mulai;
?>

<div class="float-start me-4">
    <a href="?f=user&m=insert" class="btn btn-primary" type="button">Tambah Data</a>
</div>

<h3>User</h3>

<table class="table table-bordered w-70">
    <thead>
        <tr>
            <th>No</th>
            <th>User</th>
            <th>Email</th>
            <th>Level</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($row as $r): ?>
            <tr>
                <?php 
                    if ($r["aktif"]) {
                        $status = "AKTIF";
                    } else {
                        $status = "BANNED";
                    }
                ?>

                <td><?php echo $no++ ?></td>
                <td><?php echo $r["user"] ?></td>
                <td><?php echo $r["email"] ?></td>
                <td><?php echo $r["level"] ?></td>
                <td><a href="?f=user&m=delete&id=<?php echo $r["iduser"] ?>">Delete</a></td>
                <td><a href="?f=user&m=update&id=<?php echo $r["iduser"] ?>"><?php echo $status ?></a></td>
            </tr>
        <?php endforeach ?>
    </tbody>
</table>

<?php
    for ($i=1; $i <= $halaman; $i++) { 
        echo '<a href="?f=user&m=select&p='.$i.'">'.$i.'</a>';
        echo "&nbsp &nbsp &nbsp";
    }
?>