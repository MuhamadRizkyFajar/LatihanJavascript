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
let mahasiswa = [`sandika galih`, `rahmat ghaly`, `imam h`, `irsyadma`];
let jumlahhuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jmlhhuruf: nama.length,
}));
console.log(jumlahhuruf);
console.table(jumlahhuruf);
