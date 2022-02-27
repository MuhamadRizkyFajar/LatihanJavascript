var noAngkot = 1;
var jmlAngkot = 10;

for(noAngkot; noAngkot<=jmlAngkot;noAngkot++){
    var statusAngkot = confirm('Apakah angkot No. ' + noAngkot + ' sedang beroprasi?');
    var statusTarget = confirm('Apakah angkot No. ' + noAngkot + ' sudah mencapai target?');
    if (statusAngkot && statusTarget){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if(statusAngkot && !statusTarget){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        var statusPerbaikan = confirm('Apakah angkot No. ' + noAngkot + ' sudah beroperasi kembali?');
        if (statusPerbaikan){
            console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
        } else {
            console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
        }
    }
}