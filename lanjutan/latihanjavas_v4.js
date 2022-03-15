//////HIGH ORDER FUNCTION------------------------------------------

// function kerjakanTugas(matakuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
//   selesai();
// }

// function fxselesai() {
//   alert(`Selesai mengerjakan tugas nya :)`);
// }

// // let hasilkerjakantugas = kerjakanTugas(`fisika`, fxselesai);
// kerjakanTugas(`fisika`, fxselesai);

// function ucapkansalam(waktu) {
//   return function (nama) {
//     console.log(`halo ${nama} dengan jam nya adalah ${waktu}`);
//   };
// }
// let selamatmalam = ucapkansalam(`malam`);
// console.dir(selamatmalam(`andre`));
// // console.dir(ucapkansalam().);

//////FILTER ,MAP, REDUCE------------------------------------------

// Array.prototype.map();
// Array.prototype.filter();
// Array.prototype.reduce();

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newangka = [];
// for (let index = 0; index < angka.length; index++) {
//   if (angka[index] >= 3) {
//     newangka.push(angka[index]);
//   }
// }
// console.log(newangka);

// const newangka = angka.filter((a) => a > 3);
// const newangka = angka.map((a) => a * 2);

// const newangka = angka.reduce(
//   (akumulator, kurenvalue) => akumulator + kurenvalue,
// );

// const newangkaa = angka.reduce()

// console.log(newangka);

const hasilcein = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);

console.log(hasilcein);
