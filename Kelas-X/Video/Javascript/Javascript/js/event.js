function tampil(b) {
    a = document.querySelector("p");
    a.innerText = "belajar event " + b;
    console.log("belajar event");
}

judul.onclick = function () {
    console.log("belajar event js menggunakan id");
    document.querySelector(".isi").innerHTML = "belajar event js menggunakan id";
}