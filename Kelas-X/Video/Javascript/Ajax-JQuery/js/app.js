$(document).ready(function () {
  let id = ""
  let pelanggan = ""
  let alamat = ""
  let telp = ""

  $("#submit").click(function (e) {
    e.preventDefault()
    id = $("#id").val()
    pelanggan = $("#pelanggan").val()
    alamat = $("#alamat").val()
    telp = $("#telp").val()

    if (id == "") insertData()
    else updateData()

    $("#id").val("")
    $("#pelanggan").val("")
    $("#alamat").val("")
    $("#telp").val("")
  })

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
    let dataPelanggan = {
      pelanggan: pelanggan,
      al: alamat,
      telp: telp,
    }

    $.ajax({
      type: "post",
      url: "php/insert.php",
      data: JSON.stringify(dataPelanggan),
      success: function (response) {
        let out = `<p>${response}</p>`
        $("#msg").html(out)
      },
    })

    selectData()
  }

  function deleteData() {
    alert("delete")
  }

  function updateData() {
    alert("update")
  }

  selectData()
})
