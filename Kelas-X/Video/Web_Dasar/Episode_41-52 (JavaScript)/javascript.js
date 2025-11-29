function tampil() {
    // document.querySelector("h1").innerHTML = "Belajar Javascript";
    // document.querySelector(".container").style.backgroundColor = "red";
    // document.querySelector("#para").style.fontSize = "50px";

    // console.log(document.querySelectorAll("img"));

    // min = Math.ceil(0);
    // max = Math.floor(2);
    // let n = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(n);

    // document.querySelectorAll("img")[n].style.visibility = "visible";

    document.querySelector("#hasil").value = document.querySelector("#nama").value;

    document.querySelector("#para").innerHTML = document.querySelector("#nama").value;
}

// btn.onclick = tampil;

// btn.onmouseover = function () {
//     alert("Javascript");
// }

// btn.addEventListener("mouseover", tampil);

// btn.addEventListener("mouseover", function() {
//     alert("Event");
// })

btn.onclick = function () {
    const nama = document.querySelector("#nama");

    if (nama.value == "a") {
        alert("Nama sama!");
    } else {
        alert(nama.value);
    }

    // let menu = document.querySelector("ul");
    // menu.removeChild(menu.children[0]);

    // let a = 5;
    // let b = 6;

    // b = b + a;
    // b = b - a;
    // b = b * a;
    // b = b / a;
    // b = b ** a;

    // console.log(b);

    // const nama = document.querySelector("#nama");
    // const judul = document.querySelector("h1");

    // let tampil = "Belajar";

    // judul.innerHTML = tampil + nama.value;

    // tampil = "Javascript";
    // judul.innerHTML = tampil + nama.value;
}