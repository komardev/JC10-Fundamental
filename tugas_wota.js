/*WOTACLUB

1. Input :
    - nama
    - usia
    - level (1 - 7)

2. Jika level selain 1 sampai 7 akan diminta input data
    - alert , level hanya 1 - 7
    - di minta input ulang

3. Input status (single / taken / complicated)
    - jika status complicated, isi ulang kembali
    - jika single , alert 'You are very welcome'
        - Infokan biaya
    - jika taken, alert 'Kami tidak menanggung resikonya'
        - Infokan biaya

4. Print biaya yang harus dibayar (console / alert)
    0 - 18 : Gratis
    19 - 25 : 50000
    26 - 40 : Gratis
    >= 41 : Kasih uang 100000
*/


var nama = prompt('Masukkan nama: ')
var usia = parseInt(prompt('Usia: '))

// DO WHILE
// do {
//     // variable penentu pengulangan
//     var ulang

//     var level = parseInt(prompt('Level: '))

//     if(level >= 1 && level <= 7){ // level harus 1 - 7
//         // tidak mengulang
//         ulang = false
//     } else {
//         // mengulang
//         ulang = true
//         alert('Mohon masukkan level dari 1 - 7')
//     }

// } while (ulang); // akan mengulang jika variable 'ulang' bernilai true

// WHILE
var ulang = true
while (ulang) {

    var level = parseInt(prompt('Level: '))

    if(level >= 1 && level <= 7){ // level harus 1 - 7
        // tidak mengulang
        ulang = false
    } else {
        // mengulang
        alert('Mohon masukkan level dari 1 - 7')
    }

}



do {
    // Variable penentu pengulangan
    var again

    var status = prompt('Masukkan Status (single / taken / complicated')

    if(status == 'single'){
        // tidak mengulang
        again = false
        alert('You are very welcome')
    } else if(status == 'taken'){
        // tidak mengulang
        again = false
        alert('Kami tidak menanggung resikonya')
    } else {
        // complicated
        // mengulang
        again = true
        alert('Maaf, tolong ubanh status Anda')
    }

} while (again);


/*
    0 - 18 : Gratis
    19 - 25 : 50000
    26 - 40 : Gratis
    >= 41 : Kasih uang 100000
*/

// biaya atau hadiah
if(usia >= 19 && usia <= 25){
    // biaya 50000
    alert('Karena umur Anda : '+ usia +' biaya yang harus dibayar Rp 50000')
} else if (usia >= 41){
    // hadiah 100000
    alert('Karena umur Anda : '+ usia +' Anda mendapatkan uang Rp.100000')
} else {
    // Gratis
    alert('Karena umur Anda : '+ usia +' Anda tidak dikenakan biaya apapun')
}





