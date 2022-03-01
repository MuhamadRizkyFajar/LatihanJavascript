alert('ayo bermain suwit jawa');
var tanya = true;
while(tanya){
    var player = prompt('Player memilih : gajah, orang, semut ?');
    
    // computer choose
    
    var com = Math.random();
    
    if (com <= 0.34) {
        com = 'semut';
    } else if (com > 0.34 && com <= 0.68) {
        com = 'orang';
    } else if (com > 0.68) {
        com = 'gajah'
    }
    
    console.log(com)
    
    var hasil = '';
    
    switch (player) {
        case 'gajah':
            if (player == com ){
                hasil = 'Pertandingan Seimbang';
            } else {
                hasil = (com == 'orang') ? 'Kamu MENANG!' : 'Kamu Menangis';
            }
            break;
        case 'orang':
            if (player == com ){
                hasil = 'Pertandingan Seimbang';
            } else {
                hasil = (com == 'semut') ? 'Kamu MENANG!' : 'Kamu Menangis';
            }
            break;
        case 'semut':
            if (player == com ){
                hasil = 'Pertandingan Seimbang';
            } else {
                hasil = (com == 'gajah') ? 'Kamu MENANG!' : 'Kamu Menangis';
            }
            break;
        default:
            alert('Player salah menginput')
            break;
    }
    
    alert(player +' melawan ' + com + ' : ' + hasil);

    tanya = confirm('Mau mengulang lagi');
}

alert('Terima Kasih telah bermain')
// player choose


// var noAngkot = 1;
// var jmlAngkot = 10;

// for(noAngkot; noAngkot<=jmlAngkot;noAngkot++){
//     var statusAngkot = confirm('Apakah angkot No. ' + noAngkot + ' sedang beroprasi?');
//     var statusTarget = confirm('Apakah angkot No. ' + noAngkot + ' sudah mencapai target?');
//     if (statusAngkot && statusTarget){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else if(statusAngkot && !statusTarget){
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//     } else {
//         var statusPerbaikan = confirm('Apakah angkot No. ' + noAngkot + ' sudah beroperasi kembali?');
//         if (statusPerbaikan){
//             console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//         } else {
//             console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//         }
//     }
// }