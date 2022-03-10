//objek literal
let mahasiswa = {
  nama: "irsyadma",
  energi: 10,
  makan: function (porsi) {
    var energi_awal = this.energi;
    this.energi = this.energi + porsi;
    console.log(
      `selamat datang ${this.nama} yang memilik energi ${this.energi} yang awalnya ${energi_awal} menjadi ${this.energi} karna makan eergi sebanyak ${porsi}. selamat makan :)`
    );
  },
};

let mahasiswadua = {
  nama: "irsyadmadua",
  energi: 10,
  makan: function (porsi) {
    var energi_awal = this.energi;
    this.energi = this.energi + porsi;
    console.log(
      `selamat datang ${this.nama} yang memilik energi ${this.energi} yang awalnya ${energi_awal} menjadi ${this.energi} karna makan eergi sebanyak ${porsi}. selamat makan :)`
    );
  },
};

//objek declaration
function Mahasiswa(nama, energi) {
  let mahasiswafx = {};
  mahasiswafx.nama = nama;
  mahasiswafx.energi = energi;
  mahasiswafx.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan `);
  };
  mahasiswafx.main = function (waktu) {
    this.energi -= waktu;
    console.log(`halo ${this.nama}, selamat makan main `);
  };

  return mahasiswafx;
}

let datafungsimahasiswa = Mahasiswa(`irsyadmandre:)`, 10);
let dodi = Mahasiswa(`Dodi`, 20);

//Constructor Function(keyword new)
function MahasiswaCons(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan `);
  };
  this.main = function (waktu) {
    this.energi -= waktu;
    console.log(`halo ${this.nama}, selamat makan main `);
  };
}

let dodidua = new MahasiswaCons(`Dodi`, 20);

//Object.create
function Mahasiswaobjcrttwo(nama, energi) {
  let mahasiswafx = Object.create(objectcratemahasiswa);
  mahasiswafx.nama = nama;
  mahasiswafx.energi = energi;

  return mahasiswafx;
}
function Mahasiswaobjcrtone(nama, energi) {
  let mahasiswafx = {};
  mahasiswafx.nama = nama;
  mahasiswafx.energi = energi;
  mahasiswafx.makan = objectcratemahasiswa.makan;
  mahasiswafx.main = objectcratemahasiswa.main;

  return mahasiswafx;
}
const objectcratemahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan `);
  },
  main: function (waktu) {
    this.energi -= waktu;
    console.log(`halo ${this.nama}, selamat makan main `);
  },
};

let doditiga = new Mahasiswaobjcrtone(`Dodi`, 20);
let dodiempat = new Mahasiswaobjcrttwo(`Dodioe`, 35);

//prototype
function Mahasiswaprototypeone(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}
Mahasiswaprototypeone.prototype.makan = function (porsi) {
  this.energi += porsi;

  return `halo ${this.nama} selamat makan dari metode prototipe :)`;
};

let dodilimaa = new Mahasiswaprototypeone(`Dodiprototipe`, 20);
