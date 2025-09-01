<?php 
    require_once "../dbcontroller.php";

    $db = new DB;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page | Aplikasi Restoran SMK</title>
    <link rel="stylesheet" href="../bootstrap-5.3.7-dist/css/bootstrap.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h2>Restoran</h2>
            </div>
            <div class="col-md-9">
                <div class="float-end mt-4">Logout</div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a href="?f=kategori&m=select" class="nav-link">Kategori</a>
                    </li>
                    <li class="nav-item">
                        <a href="?f=menu&m=select" class="nav-link">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a href="?f=pelanggan&m=select" class="nav-link">Pelanggan</a>
                    </li>
                    <li class="nav-item">
                        <a href="?f=order&m=select" class="nav-link">Order</a>
                    </li>
                    <li class="nav-item">
                        <a href="?f=orderdetail&m=select" class="nav-link">Order Detail</a>
                    </li>
                    <li class="nav-item">
                        <a href="?f=user&m=select" class="nav-link">User</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-9">
                <?php 
                    if (isset($_GET["f"]) && isset($_GET["m"])) {
                        $f = $_GET["f"];
                        $m = $_GET["m"];

                        $file = "../".$f."/".$m.".php";

                        require_once $file;
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