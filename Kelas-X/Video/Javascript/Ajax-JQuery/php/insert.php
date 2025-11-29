<?php 
  require_once "koneksi.php";

  $data = stripslashes(file_get_contents("php://input"));
  $dataPelanggan = json_decode($data, true);

  $pelanggan = $dataPelanggan['pelanggan'];
  $alamat = $dataPelanggan['al'];
  $telp = $dataPelanggan['telp'];

  if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {
    $sql = "INSERT INTO tblpelanggan VALUES ('', '$pelanggan', '$alamat', '$telp', '', '', 1)";

    if ($result = mysqli_query($con, $sql)) {
      echo "Data berhasil disimpan";
    } else {
      echo "Data gagal disimpan";
    }
  } else {
    echo "Data tidak boleh kosong!";
  }
?>