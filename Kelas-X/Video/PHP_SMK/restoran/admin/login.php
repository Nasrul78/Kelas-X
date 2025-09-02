<?php 
    session_start();

    require_once "../dbcontroller.php";
    $db = new DB;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Restoran</title>
    <link rel="stylesheet" href="../bootstrap-5.3.7-dist/css/bootstrap.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-4 mx-auto mt-4">
                <div class="mb-3">
                    <form action="" method="post">
                        <div>
                            <h3>Login Restoran</h3>
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Email:</label>
                            <input type="email" name="email" required class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Password:</label>
                            <input type="password" name="password" required class="form-control">
                        </div>
                        <div>
                            <input type="submit" name="login" value="Login" class="btn btn-primary">
                        </div>
                    </form>

                    <?php 
                        if (isset($_POST["simpan"])) {
                            $kategori = $_POST["kategori"];
                            $sql = "INSERT INTO tblkategori VALUES ('', '$kategori')";
                            $db->runSQL($sql);

                            header("location:?f=kategori&m=select");
                        }
                    ?>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

<?php 
    if (isset($_POST["login"])) {
        $email = $_POST["email"];
        $password = hash('sha256', $_POST["password"]);

        $sql = "SELECT * FROM tbluser WHERE email = '$email' AND password = '$password'";
        $count = $db->rowCOUNT($sql);
        
        if ($count == 0) {
            echo '<h3 align="center">Email Atau Password Salah!</h3>';
        } else {
            $sql = "SELECT * FROM tbluser WHERE email = '$email' AND password = '$password'";
            $row = $db->getITEM($sql);

            $_SESSION["user"] = $row["email"];
            $_SESSION["level"] = $row["level"];
            $_SESSION["iduser"] = $row["iduser"];

            header("location:index.php");
        }
    }
?>