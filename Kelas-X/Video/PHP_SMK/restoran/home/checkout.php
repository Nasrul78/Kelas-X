<?php 
    if (isset($_GET["total"])) {
        $total = $_GET["total"];
        $idOrder = idOrder();
        $idPelanggan = $_SESSION["idpelanggan"];
        $tgl = date("Y-m-d");

        $sql = "SELECT * FROM tblorder WHERE idorder = $idOrder";
        $count = $db->rowCOUNT($sql);

        if ($count == 0) {
            insertOrder($idOrder, $idPelanggan, $tgl, $total);
            insertOrderDetail($idOrder);
        } else {
            insertOrderDetail($idOrder);
        }
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

    function insertOrderDetail($idOrder) {
        global $db;

        foreach ($_SESSION as $key => $value) {
            if ($key<>'pelanggan' && $key<>'idpelanggan') {
                $id = substr($key, 1);
                $sql = "SELECT * FROM tblmenu WHERE idmenu = $id";
                $row = $db->getALL($sql);

                foreach ($row as $r) {
                    $idmenu = $r['idmenu'];
                    $harga = $r['harga'];
                    $sql = "INSERT INTO tblorderdetail VALUES ('', $idOrder, $idmenu, $value, $harga)";
                    $db->runSQL($sql);
                }

                echo "<pre>";
                print_r($row);
                echo "</pre>";
            }
        }
    }
?>