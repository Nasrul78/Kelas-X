<h3>Insert Menu</h3>

<?php 
    if (isset($_GET["id"])) {
        $id = $_GET["id"];

        $sql = "SELECT * FROM tblmenu WHERE idmenu = $id";
        $item = $db->getITEM($sql);

        $idkategori = $item["idkategori"];
    }

    $row = $db->getALL("SELECT * FROM tblkategori ORDER BY kategori asc");    
?>

<div class="mb-3">
    <form action="" method="post" enctype="multipart/form-data">
        <div class="mb-3 w-50">
            <label for="" class="form-label">Kategori:</label><br>
            <select name="idkategori" id="">
                <?php foreach ($row as $r): ?>
                    <option
                        <?php if ($idkategori == $r["idkategori"]) echo "selected" ?>
                        value="<?php echo $r["idkategori"] ?>">
                        <?php echo $r["kategori"] ?>
                    </option>
                <?php endforeach ?>
            </select>
        </div>
        <div class="mb-3 w-50">
            <label for="" class="form-label">Nama Menu:</label>
            <input type="text" name="menu" required value="<?php echo $item["menu"] ?>" class="form-control">
        </div>
        <div class="mb-3 w-50">
            <label for="" class="form-label">Harga Menu:</label>
            <input type="text" name="harga" number required value="<?php echo $item["harga"] ?>" class="form-control">
        </div>
        <div class="mb-3 w-50">
            <label for="" class="form-label">Gambar Menu:</label><br>
            <input type="file" name="gambar">
        </div>
        <div>
            <input type="submit" name="simpan" value="Simpan" class="btn btn-primary">
        </div>
    </form>
</div>

<?php 
    if (isset($_POST["simpan"])) {
        $idkategori = $_POST["idkategori"];
        $menu = $_POST["menu"];
        $harga = $_POST["harga"];

        $gambar = $item["gambar"];
        $temp = $_FILES["gambar"]["tmp_name"];
        
        if (!empty($temp)) {
            $gambar = $_FILES["gambar"]["name"];
            move_uploaded_file($temp, '../upload/'.$gambar);
        }

        $sql = "UPDATE tblmenu SET idkategori = $idkategori, menu = '$menu',
                gambar = '$gambar', harga = $harga WHERE idmenu = $id";
        $db->runSQL($sql);
            
        header("location:?f=menu&m=select");
    }
?>