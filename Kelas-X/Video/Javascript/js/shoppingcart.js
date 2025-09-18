let tblmenu = [
  {
    idmenu: 1,
    idkategori: 1,
    menu: "Apel Manalagi",
    gambar: "apel.png",
    harga: 3000,
  },
  {
    idmenu: 2,
    idkategori: 1,
    menu: "Jeruk Baby",
    gambar: "jeruk.png",
    harga: 5000,
  },
  {
    idmenu: 3,
    idkategori: 2,
    menu: "Nasi Padang",
    gambar: "nasi-padang.png",
    harga: 20000,
  },
  {
    idmenu: 4,
    idkategori: 2,
    menu: "Nasi Ayam",
    gambar: "ayam-goreng.png",
    harga: 15000,
  },
  {
    idmenu: 5,
    idkategori: 3,
    menu: "Es Jus",
    gambar: "jus.png",
    harga: 3000,
  },
  {
    idmenu: 6,
    idkategori: 3,
    menu: "Es Sirup",
    gambar: "syrup.png",
    harga: 3000,
  },
]

let tampil = tblmenu.map((kolom) => {
  return `
  <div class="product-content">
    <div class="image"><img src="images/${kolom.gambar}" alt="" /></div>

    <div class="title">
      <h2>${kolom.menu}</h2>
    </div>

    <div class="deskripsi">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Cupiditate, dignissimos.
      </p>
    </div>

    <div class="harga">
      <h2>${kolom.harga}</h2>
    </div>

    <div class="btn-beli">
      <button data-idmenu="${kolom.idmenu}">Beli</button>
    </div>
  </div>`
})

const isi = document.querySelector(".product")
isi.innerHTML = tampil

let btnBeli = document.querySelectorAll(".btn-beli > button")

let cart = []

for (let i = 0; i < btnBeli.length; i++) {
  btnBeli[i].onclick = () => {
    // console.log(btnBeli[i].dataset["idmenu"])
    cart.push(btnBeli[i].dataset["idmenu"])

    tblmenu.filter((a) => {
      if (a.idmenu == btnBeli[i].dataset["idmenu"]) {
        cart.push(a)
        console.log(cart)
      }
    })
  }
}
