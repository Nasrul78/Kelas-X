<?php 
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login dan Register</title>
</head>
<body>
    <div>
        <div>
            <ul>
                <li><a href="?page=home">Home</a></li>
                <?php 
                    if (!isset($_SESSION['email'])){
                ?>
                    <li><a href="?page=register">Register</a></li>
                    <li><a href="?page=login">Login</a></li>
                <?php
                    } else {
                ?>
                    <li><a href="?page=logout">Logout</a></li>
                    <li><a href="?page=user">User</a></li>
                <?php
                    }
                ?>
            </ul>
        </div>

        <div>
            <?php 
                if (isset($_GET['page'])) {
                    $isi = $_GET['page'];

                    if ($isi == "home")
                        require_once "index.php";
                    if ($isi == "register")
                        require_once "register.php";
                    if ($isi == "login")
                        require_once "login.php";
                    if ($isi == "logout")
                        require_once "logout.php";
                    if ($isi == "user")
                        require_once "user.php";
                }                 
            ?>
        </div>
    </div>

    <?php 
        echo "<pre>";
            print_r($_SESSION);
        echo "</pre>";

    ?>
</body>
</html>