// 1. Function Declaration
function sapa() {
  console.log("Halo!");
}

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

// 2. Function Expression
sapa = function () {
  console.log("Halo!");
};

tambah = function (a, b) {
  return a + b;
};

cekGenap = function (n) {
  return n % 2 === 0;
};

luasPersegi = function (s) {
  return s * s;
};

pajak = function (h) {
  return h * 0.1;
};

// 3. Arrow Function
sapa = () => console.log("Halo!");
tambah = (a, b) => a + b;
kuadrat = (x) => x * x;
diskon = (h) => h * 0.1;
cekUmur = (u) => u >= 17;

// 4. Anonymous Function
setTimeout(function () {
  console.log("Selesai");
}, 1000);

const btn = document.getElementById("btn");
btn.onclick = function () {
  alert("Klik");
};

const array0 = [1, 2, 3];
array0.forEach(function (n) {
  console.log(n);
});

document.addEventListener("click", function () {
  console.log("Klik");
});

(function () {
  console.log("Anonim");
})();

// 5. Callback Function
function proses(a, cb) {
  cb(a);
}

proses(5, function (x) {
  console.log(x);
});

const array1 = [1, 2].map(function (n) {
  return n * 2;
});

setTimeout(() => console.log("OK"), 500);

function hitung(a, b, op) {
  return op(a, b);
}

// 6. IIFE
(function () {
  console.log("Mulai");
})();

(() => console.log("Start"))();

(function (n) {
  console.log(n);
})(5);

(() => {
  let x = 10;
  console.log(x);
})();

(function () {
  alert("IIFE");
})();

// 7. Function Constructor
function User(n) {
  this.nama = n;
}
const u1 = new User("A");

function Mobil(m) {
  this.merk = m;
}
const m1 = new Mobil("Honda");

function Produk(n, h) {
  this.nama = n;
  this.harga = h;
}

// 8. Async Function
async function getData() {
  return "OK";
}

const cek = async () => "Siap";

async function delay() {
  await new Promise((r) => setTimeout(r, 1000));
}

async function hitung(a) {
  return a * 2;
}

async function tampil() {
  console.log(await getData());
}
