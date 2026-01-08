<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator</title>
</head>
<body>
    <form action="" method="post">
        <label for="tanggal">Tanggal :</label> 
        <input type="number" id="tanggal" name="tanggal" placeholder="tanggal"> <br>
        <label for="bulan">Bulan :</label> 
        <input type="number" id="bulan" name="bulan" placeholder="bulan"> <br>

        <input type="submit" value="Kirim" name="zodiak">
    </form>

    <form action="" method="post">
        <input type="number" name="a" placeholder="Angka Pertama">
        <input type="number" name="b" placeholder="Angka Kedua"><br>
        <select name="operator" hidden>
            <input type="radio" name="operator" value="+">+</input>
            <input type="radio" name="operator" value="-">-</input>
            <input type="radio" name="operator" value="*">*</input>
            <input type="radio" name="operator" value="/">/</input>
        </select>
        <input type="submit" value="Hitung" name="kalkulator">
    </form>

    <?php 

        if (isset($_POST['kalkulator'])) {
            $operator = $_POST['operator'];
            $a = $_POST['a'];
            $b = $_POST['b'];

            if ($hasil == '+')
                echo "Hasilnya adalah : " . $a + $b;
            else if ($hasil == '-')
                echo "Hasilnya adalah : " . $a - $b;
            else if ($hasil == '*')
                echo "Hasilnya adalah : " . $a * $b;
            else if ($hasil == '/')
                echo "Hasilnya adalah : " . $a / $b;
            echo "<br>";
        }

        if (isset($_POST['zodiak'])) {
            $tanggal = $_POST['tanggal'];
            $bulan = $_POST['bulan'];

            cekZodiak($tanggal, $bulan);
        }    

        function belajar() {
            echo"Hari ini saya belajar function";
        }

        // belajar();

        function cekTanggal( $tanggal) {
            if ($tanggal > 0 && $tanggal <= 31)
                return true;
            else
                return false;
        }
        
        // cekTanggal(1);
        // cekTanggal(0);
        // cekTanggal(100);

        function cekZodiak($tanggal , $bulan) {
            if (!cekTanggal($tanggal) || !cekBulan($bulan)) return;

            if ($bulan == 1) {
                if ($tanggal > 0 && $tanggal < 20)
                    echo "Zodiak anda Capricorn";
                else
                    echo "Zodiak anda Aquarius";
            } else if ($bulan == 2) {
                if ($tanggal > 0 && $tanggal < 20)
                    echo "Zodiak anda Aquarius";
                else
                    echo "Zodiak anda Pisces";
            } else if ($bulan == 3) {
                if ($tanggal > 0 && $tanggal < 20)
                    echo "Zodiak anda Pisces";
                else
                    echo "Zodiak anda Aries";
            } else if($bulan == 4) {
                if ($tanggal > 0 && $tanggal < 22)
                    echo "Zodiak anda Aries";
                else
                    echo "Zodiak anda Taurus";
            } else if ($bulan == 5) {
                if ($tanggal > 0 && $tanggal < 22)
                    echo "Zodiak anda Taurus";
                else
                    echo "Zodiak anda Gemini";
            } else if ($bulan == 6) {
                if ($tanggal > 0 && $tanggal < 21)
                    echo "Zodiak anda Gemini";
                else
                    echo "Zodiak anda Cancer";
            } else if ($bulan == 7) {
                if ($tanggal > 0 && $tanggal < 23)
                    echo "Zodiak anda Cancer";
                else
                    echo "Zodiak anda Leo";
            } else if ($bulan == 8) {
                if ($tanggal > 0 && $tanggal < 23)
                    echo "Zodiak anda Leo";
                else
                    echo "Zodiak anda Virgo";
            } else if ($bulan == 9) {
                if ($tanggal > 0 && $tanggal < 23)
                    echo "Zodiak anda Virgo";
                else
                    echo "Zodiak anda Libra";
            } else if ($bulan == 10) {
                if ($tanggal > 0 && $tanggal < 23)
                    echo "Zodiak anda Libra";
                else
                    echo "Zodiak anda Scorpio";
            } else if ($bulan == 11) {
                if ($tanggal > 0 && $tanggal < 22)
                    echo "Zodiak anda Scorpio";
                else
                    echo"Zodiak anda Sagittarius";
            } else if ($bulan == 12) {
                if ($tanggal > 0 && $tanggal < 22)
                    echo"Zodiak anda Sagittarius";
                else
                    echo"Zodiak anda Capricorn";
            } else
                echo"tanggal atau bulan salah";

            echo "<br>";
        }

        // cekZodiak(3,4);
        // cekZodiak(5,9);

        function cekBulan($bulan) {
            if ($bulan > 0 && $bulan <13)
                return true;
            else
                return false;
        }

        cekBulan(0);

        if (cekBulan(0) && cekTanggal(0))   {
            echo "Bulan atau tanggal benar";
        }else {
            echo "Bulan atau tanggal salah";
        }

        function luasPersegiPanjang($p , $l) {
            $luas = $p * $l;

            return $luas;
        }

        $p = 34;
        $l = 69;
        $t = 99;

        echo "<br>";
        echo "Volume balok dengan p = 5, l = 3, dan t = 15 adalah:";
        echo luasPersegiPanjang($p, $l) * $t;

        $a = 9;
        $b = 6;
        function tambah($a, $b) {
            $hasil = $a + $b;
            return $hasil;
        }
        function kurang($a, $b){
            $hasil = $a - $b;
            return $hasil;
        }
        function kali($a, $b){
            $hasil = $a * $b;
            return $hasil;
        }
        function bagi($a, $b){
            $hasil = $a / $b;
            return $hasil;
        }

        echo "<br>";
        echo tambah($a, $b);
        echo "<br>";
        echo kurang($a, $b);
        echo "<br>";
        echo kali($a, $b);
        echo "<br>";
        echo bagi($a, $b);
    ?>
</body>
</html>