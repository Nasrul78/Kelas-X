<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <title>Ajax-JQuery Bootstrap PHP</title>

    <script src="js/jquery.js"></script>
    <script src="js/app.js"></script>
  </head>
  <body>    
    <div class="container">
      <div class="row">
        <h1>Belajar Ajax-JQuery Bootstrap PHP</h1>
      </div>
      <div class="mt-4 row">
        <div class="col-sm">
          <div class="row">
            <h2>Input Data Pelanggan</h2>
          </div>
          <div id="msg"></div>
          <form>
            <input type="text" class="form-control" id="id" required aria-describedby="emailHelp">
            <div class="mb-3">
              <label for="pelanggan" class="form-label">Pelanggan</label>
              <input type="text" class="form-control" id="pelanggan" required aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Harus diisi!</div>
            </div>
            <div class="mb-3">
              <label for="alamat" class="form-label">Alamat</label>
              <input type="text" class="form-control" id="alamat" required>
              <div id="emailHelp" class="form-text">Harus diisi!</div>
            </div>
            <div class="mb-3">
              <label for="telp" class="form-label">Telp</label>
              <input type="text" class="form-control" id="telp" required>
              <div id="emailHelp" class="form-text">Harus diisi!</div>
            </div>
            <button type="submit" id="submit" class="btn btn-primary">Simpan</button>
          </form>
        </div>
        <div class="col-sm">
          <div class="row"><h2>Data Pelaggan</h2></div>
          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Pelanggan</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">Telp</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody id="isiData"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  </body>
</html>