function coba() {
    let belajar = "saya belajar javascript";
    console.log(belajar);
    console.log("javascript itu mudah");
}

function persegi(lebar, panjang) {
    luas = panjang * lebar;
    console.log(luas);
}

function out() {
    return console.log("output function");
}

function lingkaran(r) {
    luas = 3.14 * r * r;
    return luas;
}

const tinggi = 5;
let tabung = lingkaran(10) * tinggi;

function lewat(a) {
    return a;
}

console.log(lewat(tabung));