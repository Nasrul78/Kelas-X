<?php 
    if (isset($_GET["id"])) {
        $id = $_GET["id"];
        $sql = "SELECT * FROM tblorder WHERE idorder = $id";

        $row = $db->getITEM($sql);
    }
?>

<h3>Pembayaran Order</h3>

<div class="mb-3">
    <form action="" method="post">
        <div class="mb-3 w-50">
            <label for="" class="form-label">Total:</label>
            <input type="number" name="total" required value="<?php echo $row["total"] ?>" class="form-control">
        </div>
        <div class="mb-3 w-50">
            <label for="" class="form-label">Bayar:</label>
            <input type="number" name="bayar" required class="form-control">
        </div>
        <div>
            <input type="submit" name="simpan" value="Simpan" class="btn btn-primary">
        </div>
    </form>
</div>

<?php 
    if (isset($_POST["simpan"])) {
        $bayar = $_POST["bayar"];
        $kembali = $bayar - $row["total"];

        if ($kembali < 0) {
            echo "<h3>Pembayaran Kurang!</h3>";
        } else {
            $sql = "UPDATE tblorder SET bayar = '$bayar', kembali = $kembali, status = 1 WHERE idorder = $id";
            $db->runSQL($sql);

            header("location:?f=order&m=select");
        }
    }
?>