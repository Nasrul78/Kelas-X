Belajar PHP
<h1>Saya Belajar PHP</h1>

<?php
    $nama = "Mochammad Nasrul Illah Adfy Putra";
    $kelas = 10;
    $umur = 15;
    $alamat = "Siwalanpanji, Buduran";
    $hobi = "Code, Game, Sleep";
    $cita_cita = "Web Developer";
    $enter = "<br/>";

    echo $nama;
    echo $enter;

    echo $kelas;
    echo $enter;

    echo $umur;
    echo $enter;

    echo $alamat;
    echo $enter;

    echo $hobi;
    echo $enter;

    echo $cita_cita


    /*

    echo "<h1>Saya Belajar PHP</h1>";
    echo "Nama : ";
    echo "Mochammad Nasrul Illah Adfy Putra" . "<br/>"; 

    echo "Saya Kelas: ";
    echo 12; 
    echo "<br/>";

    echo "Alamat : ";
    echo "Siwalanpanji, Buduran" ;
    echo "<br/>";

    echo "Umur :";
    echo 15 . "<br/>";

    echo "Hobi :";
    echo "Code, Game, Sleep" . "<br/>";

    echo "Cita-Cita :";
    echo "Web Developer";

    */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Nasrul</title>
</head>
<body>
    <div>
        <h1>Identitas</h1>
        <table>
            <tbody>
                <tr>
                    <td>
                        Nama : 
                    </td>
                    <td>
                        <?= $nama; ?>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        Alamat : 
                    </td>
                    <td>
                        <?= $alamat; ?>
                    </td>
                </tr>

                <tr>
                    <td>
                        Kelas : 
                    </td>
                    <td>
                        <?= $kelas; ?>
                    </td>
                </tr>

                <tr>
                    <td>
                        Umur : 
                    </td>
                    <td>
                        <?= $umur; ?>
                    </td>
                </tr>
            </tbody>

                <tr>
                    <td>
                        Hobi : 
                    </td>
                    <td>
                        <?= $hobi; ?>
                    </td>
                </tr>
            </tbody>

                <tr>
                    <td>
                        Cita cita : 
                    </td>
                    <td>
                        <?= $cita_cita; ?>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>