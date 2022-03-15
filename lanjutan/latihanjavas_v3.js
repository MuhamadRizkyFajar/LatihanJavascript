//arrow function

//#1
// const tampilnama = function (params) {
//   return `halo ${params}`;
// };

// const tampilnama = (params) => `halo ${params}`;

// console.log(tampilnama(`adadad`));
//#2
// let mahasiswa = [`sandika galih`, `rahmat ghaly`, `imam h`, `irsyadma`];
// let jumlahhuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// let mahasiswa = [`sandika galih`, `rahmat ghaly`, `imam h`, `irsyadma`];
// let jumlahhuruf = mahasiswa.map((nama) => `${nama.length}`);
// let mahasiswa = [`sandika galih`, `rahmat ghaly`, `imam h`, `irsyadma`];
// let jumlahhuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlhhuruf: nama.length,
// }));
// console.log(jumlahhuruf);
// console.table(jumlahhuruf);
//--------------------------------------------------------------------------------------------

//this arrow function

//cunstrucotr function

const mahasiswa = function () {
  this.nama = `irsyadaaaaa`;
  this.umur = 22;
  console.log(this);
};

let irsyadsiswa = new mahasiswa();

//objek literal
const mhs1 = {
  nama: `irsyadyoi`,
  umur: 22,
  sayHello: function () {
    console.log(
      `halo nama saya ${this.nama} dan saya berumur ${this.umur} tahun`
    );
  },
};
