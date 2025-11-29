<?php 
  require_once "koneksi.php";

  $data = stripslashes(file_get_contents("php://input"));
  $idPelanggan = json_decode($data, true);

  $idpelanggan = $idPelanggan['idpelanggan'];

  if (!empty($idpelanggan)) {
    $sql = "DELETE FROM tblpelanggan WHERE idpelanggan = $idpelanggan";

    if ($result = mysqli_query($con, $sql)) {
      echo "Data berhasil dihapus";
    } else {
      echo "Data gagal dihapus";
    }
  } else {
    echo "Data belum dipilih!";
  }
?>