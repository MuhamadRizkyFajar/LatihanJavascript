//////HIGH ORDER FUNCTION

// function kerjakanTugas(matakuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
//   selesai();
// }

// function fxselesai() {
//   alert(`Selesai mengerjakan tugas nya :)`);
// }

// // let hasilkerjakantugas = kerjakanTugas(`fisika`, fxselesai);
// kerjakanTugas(`fisika`, fxselesai);

function ucapkansalam(waktu) {
  return function (nama) {
    console.log(`halo ${nama} dengan jam nya adalah ${waktu}`);
  };
}
let selamatmalam = ucapkansalam(`malam`);
console.dir(selamatmalam(`andre`));
// console.dir(ucapkansalam().);

//////FILTER ,MAP, REDUCE

// Array.prototype.map();
// Array.prototype.filter();
// Array.prototype.reduce();
