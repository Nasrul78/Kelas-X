<form action="" method="POST">
    <label for="nis">NIS : </label><br>
    <input type="number" name="nis" id="nis" required placeholder="Masukkan NIS"><br>

    <label for="nama">Nama : </label><br>
    <input type="text" name="nama" id="nama" required placeholder="Masukkan Nama"><br>

    <label for="alamat">Alamat : </label><br>
    <input type="text" name="alamat" id="alamat" placeholder="Masukkan Alamat"><br>

    <label for="telepon">Telepon : </label><br>
    <input type="text" name="telepon" id="telepon" placeholder="Masukkan Telepon"><br>

    <input type="submit" name="simpan" value="Simpan">
</form>

<?php 
    $host = 'localhost';
    $user = 'root';
    $password = 'nasnas78';
    $db = 'dbsekolah';

    $koneksi = mysqli_connect($host, $user, $password, $db);


    if (isset($_POST['simpan'])) {
        $nis = $_POST['nis'];
        $nama = $_POST['nama'];
        $alamat = $_POST['alamat'];
        $telepon = $_POST['telepon'];

        // echo $nis, " - ", $nama, " - ", $alamat, " - ", $telepon;

        $sql = "INSERT INTO tblsiswa (nis, nama, alamat, telepon) VALUES ($nis, '$nama', '$alamat', '$telepon')";
        echo $sql;
        $query = mysqli_query($koneksi, $sql);
    }

    $sql = "SELECT * FROM tblsiswa";
    $query = mysqli_query($koneksi, $sql);
?>

<table border=1>
    <thead>
        <tr>
            <th>NIS</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Telepon</th>
        </tr>
    </thead>
    <tbody>

    <?php
        while ($siswa = mysqli_fetch_array($query)){
    ?>
        <tr>
            <td><?= $siswa['nis']; ?></td>
            <td><?= $siswa['nama']; ?></td>
            <td><?= $siswa['alamat']; ?></td>
            <td><?= $siswa['telepon']; ?></td>
        </tr>  
    <?php
        }
    ?>
    </tbody>
</table>