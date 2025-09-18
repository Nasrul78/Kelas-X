document.querySelector("#klik").addEventListener("click", () => {
  const URL = "https://jsonplaceholder.typicode.com/todos"

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let out = "<ul>"

      data.forEach((el) => {
        out += `<li>${el.title}</li>`
        // console.log(el.title)
      })

      out += "</ul>"
      document.querySelector("#isi").innerHTML = out
    })
})
