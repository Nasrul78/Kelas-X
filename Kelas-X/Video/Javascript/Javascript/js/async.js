document.querySelector("#klik").addEventListener("click", tampil)

async function tampil() {
  const URL = "http://jsonplaceholder.typicode.com/users"
  const res = await fetch(URL)
  const data = await res.json()

  let out = "<ul>"
  data.forEach((element) => {
    out += `<li>${element.name}</li>`
  })
  out += "</ul>"

  document.querySelector("#isi").innerHTML = out
}
