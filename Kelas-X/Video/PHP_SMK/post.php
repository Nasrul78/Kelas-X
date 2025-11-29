<form action="nav.php" method="post">
    Email:
    <input type="email" name="email">

    Password:
    <input type="password" name="password">

    <input type="submit" name="kirim" value="login">
</form>

<?php 
    if ( isset($_POST["kirim"]) ) {
        $email = $_POST["email"];
        $password = $_POST["password"];

        echo "Email: ", $email, "<br>";
        echo "Password: ", $password;
    }
?>