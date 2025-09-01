<?php 
    if (isset($_GET["total"])) {
        $total = $_GET["total"];
        echo $total;
        echo "<br>";
        echo idOrder();
        echo "<br>";
        insertOrder(idOrder(), $_SESSION["idpelanggan"], "2025-09-01", $total);
    }

    function idOrder() {
        global $db;
        $sql = "SELECT idorder FROM tblorder ORDER BY idorder DESC";
        $jumlah = $db->rowCOUNT($sql);

        if ($jumlah == 0) {
            $id = 1;
        } else {
            $item = $db->getITEM($sql);
            $id = $item["idorder"] + 1;
        }

        return $id;
    }

    function insertOrder($idOrder, $idPelanggan, $tgl, $total) {
        global $db;
        $sql = "INSERT INTO tblorder VALUES ($idOrder, $idPelanggan, '$tgl', $total, 0, 0, 0)";
        $db->runSQL($sql);
    }
?>