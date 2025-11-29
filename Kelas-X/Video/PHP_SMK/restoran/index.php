<?php 
    session_start();

    require_once "dbcontroller.php";
    $db = new DB;

    $sql = "SELECT * FROM tblkategori ORDER BY kategori";
    $row = $db->getALL($sql);

    if (isset($_GET["log"])) {
        session_destroy();
        header("location:index.php");
    }

    function cart() {
        global $db;

        $cart = 0;

        foreach ($_SESSION as $key => $value) {
            if ($key<>'pelanggan' && $key<>'idpelanggan' && $key<>'user' && $key<>'level' && $key<>'iduser') {
                $id = substr($key, 1);
                $sql = "SELECT * FROM tblmenu WHERE idmenu = $id";
                $row = $db->getALL($sql);

                foreach ($row as $r) {
                    $cart++;
                }
            }
        }

        return $cart;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restoran SMKN 2 | Aplikasi Restoran SMK</title>
    <link rel="stylesheet" href="bootstrap-5.3.7-dist/css/bootstrap.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h2><a href="index.php">Restoran SMKN 2</a></h2>
            </div>
            <div class="col-md-9">
                <?php 
                    if (isset($_SESSION["pelanggan"])) {
                        echo '
                            <div class="float-end mt-4"><a href="?log=logout">Logout</a></div>
                            <div class="float-end mt-4 me-4">Pelanggan: '.$_SESSION["pelanggan"].'</div>
                            <div class="float-end mt-4 me-4">Cart: ( <a href="?f=home&m=beli">'.cart().'</a> )</div>
                            <div class="float-end mt-4 me-4"><a href="?f=home&m=histori">Histori</a></div>
                        ';
                    } else {
                        echo '
                            <div class="float-end mt-4 me-4"><a href="?f=home&m=login">Login</a></div>
                            <div class="float-end mt-4 me-4"><a href="?f=home&m=daftar">Daftar</a></div>
                        ';
                    }
                ?>

            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-3">
                <h3>Kategori</h3>
                <hr>
                <?php if (!empty($row)) { ?>
                <ul class="nav flex-column">
                    <?php foreach ($row as $r): ?>
                    <li class="nav-item">
                        <a href="?f=home&m=produk&id=<?php echo $r["idkategori"] ?>" class="nav-link">
                            <?php echo $r["kategori"] ?>
                        </a>
                    </li>
                    <?php endforeach ?>
                </ul>
                <?php } ?>
            </div>
            <div class="col-md-9">
                <?php 
                    if (isset($_GET["f"]) && isset($_GET["m"])) {
                        $f = $_GET["f"];
                        $m = $_GET["m"];

                        $file = $f."/".$m.".php";
                        require_once $file;
                    } else {
                        require_once "home/produk.php";
                    }
                ?>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col">
                <p class="text-center">2025 - copyright@smkn2buduran.com</p>
            </div>
        </div>
    </div>
</body>
</html>