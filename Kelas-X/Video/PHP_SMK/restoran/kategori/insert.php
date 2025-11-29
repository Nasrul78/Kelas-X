<h3>Insert Kategori</h3>

<div class="mb-3">
    <form action="" method="post">
        <div class="mb-3 w-50">
            <label for="" class="form-label">Nama Kategori:</label>
            <input type="text" name="kategori" required placeholder="Isi Kategori" class="form-control">
        </div>
        <div>
            <input type="submit" name="simpan" value="Simpan" class="btn btn-primary">
        </div>
    </form>
</div>

<?php 
    if (isset($_POST["simpan"])) {
        $kategori = $_POST["kategori"];
        $sql = "INSERT INTO tblkategori VALUES ('', '$kategori')";
        $db->runSQL($sql);

        header("location:?f=kategori&m=select");
    }
?>