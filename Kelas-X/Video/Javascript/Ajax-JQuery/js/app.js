$(document).ready(function () {
  function selectData() {
    $.ajax({
      type: "get",
      url: "php/select.php",
      dataType: "json",
      success: function (response) {
        let out = ""
        let no = 1
        $.each(response, function (key, val) {
          out += `
            <tr>
              <td>${no++}</td>
              <td>${val.pelanggan}</td>
              <td>${val.alamat}</td>
              <td>${val.telp}</td>
            </tr>`
        })
        $("#isiData").html(out)
      },
    })
  }

  function insertData() {
    alert("insert")
  }

  function deleteData() {
    alert("delete")
  }

  function updateData() {
    alert("update")
  }

  selectData()
})
