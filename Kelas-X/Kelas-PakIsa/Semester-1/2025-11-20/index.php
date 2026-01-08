<?php
    session_start();
?>

<form action="" method="post">
    <label for="">Email: </label><br>
    <input type="text" name="email" require placeholder="Masukkan Email"><br>

    <label for="">Password: </label><br>
    <input type="password" name="password" require placeholder="Masukkan Password"><br>

    <input type="submit" name="login" value="login">
</form>

<a href="login.php">Login</a>

<?php
    if (isset($_POST["login"])) {
        $email = $_POST["email"];
        $password = $_POST["password"];

        $_SESSION["email"] = $email;

        echo "Email = $email<br>";
        echo "Password = $passowrd<br>";
    }

    // $isi = "Hello World!";
    // $hasil = isset($isi);
    // echo $hasil;

    // if (isset($isi)) {
    //     echo "Ada Isi";
    // } else {
    //     echo "Tidak Ada Isi";
    // }

    // var_dump($isi);
?>