document.querySelector("#klik").addEventListener("click", (e) => {
  const URL = "js/tblmenu.json"

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let output =
        "<h1>Data Menu</h1> <table><th>Menu</th><th>Harga</th><th>Warna</th>"
      data.forEach((element) => {
        output += `
        <tr>
          <td>${element.menu}</td>
          <td>${element.harga}</td>
          <td>${element.warna[0]}</td>
        </tr>`
      })
      output += "</tr></table>"
      document.querySelector("#isi").innerHTML = output
    })
})

// let tblmenu = [
//   {
//     idmenu: 1,
//     idkategori: 1,
//     menu: "Apel Manalagi",
//     harga: 3000,
//     warna: ["merah", "kuning", "hijau"],
//     stock: true,
//     keterangan: null,
//   },
//   {
//     idmenu: 2,
//     idkategori: 1,
//     menu: "Jeruk Bayi",
//     harga: 5000,
//     warna: ["oranye"],
//     stock: true,
//     keterangan: null,
//   },
// ]

// console.log(tblmenu[0].menu)
