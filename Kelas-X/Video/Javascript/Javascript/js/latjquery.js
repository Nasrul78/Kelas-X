// $(document).ready(function () {
//   console.log("Siap!")
// })

$(function () {
  $("#isi").html("<h1>Belajar JQuery</h1>")

  $("#klik").click(function (e) {
    e.preventDefault()
    alert("Belajar Javascript")
  })

  $("#isi").mouseleave(function () {
    alert("Mouse Leave")
    console.log("mouse")
  })
})
