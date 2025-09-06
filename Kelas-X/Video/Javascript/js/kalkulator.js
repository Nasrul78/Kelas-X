let btn = document.querySelectorAll(".btn-angka > button");
let tampil = document.querySelector("#tampil");
let mat = document.querySelectorAll(".btn-mat > button");
let pilihan = null;

// tampil.value = btn[8].innerHTML;
// console.log(btn[8].innerHTML);
// console.log(mat);

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        // console.log(btn[i].innerHTML);

        if (tampil.value == "0") {
            tampil.value = btn[i].innerHTML;
        } else {
            tampil.value += btn[i].innerHTML;
        }
    };
}

mat[0].onclick = function () {
    tampil.value = "0";
    pilihan = null;
}

mat[1].onclick = function () {
    pilihan = "tambah"
    x = tampil.value;
    tampil.value = "0"
}

mat[2].onclick = function () {
    pilihan = "kurang"
    x = tampil.value;
    tampil.value = "0"
}

mat[3].onclick = function () {
    pilihan = "kali"
    x = tampil.value;
    tampil.value = "0"
}

mat[4].onclick = function () {
    pilihan = "bagi"
    x = tampil.value;
    tampil.value = "0"
}

mat[5].onclick = function () {
    y = tampil.value;
    tampil.value = kalkulator(pilihan);
}

function kalkulator(pilihan) {
    if (pilihan != null) {
        switch (pilihan) {
            case "tambah":
                hasil = parseFloat(x) + parseFloat(y);
                break;
            case "kurang":
                hasil = parseFloat(x) - parseFloat(y);
                break;
            case "kali":
                hasil = parseFloat(x) * parseFloat(y);
                break;
            case "bagi":
                hasil = parseFloat(x) / parseFloat(y);
                break;
        }

        return hasil;
    }
}