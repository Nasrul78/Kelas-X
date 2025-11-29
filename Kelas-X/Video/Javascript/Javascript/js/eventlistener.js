function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar eventlistener";
    console.log("coba eventlistener");
}

// judul.addEventListener("click", coba);

// judul.onmouseover = coba;

judul.onmouseover = function () {
    console.log("coba function anonymous");
}