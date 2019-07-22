// LOOP
// Melakukan suatu proses selama kondisi tertentu terpenuhi

// Selama lampu merah, kendaraan berhenti. jika tidak lagi merah, tidak berhenti

// Selama masih hujan, Akan menggunakan payung, jika tidak lagi hujan, simpan payung

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// WHILE
// var angka = 9

// // Selama condition bernilai true
// while(angka <= 3){
//     console.log(angka);
//     angka++
//     // setelah baris terakhir di proses
//     // akan check condition pada while
// }

// console.log('Selesai WHILE');

//  DO WHILE
// var nilai = 9

// do{
//     console.log(nilai);
//     nilai++
// }while(nilai <= 3) // true

// console.log('Selesai DO WHILE');


// FOR
// declaration ; condition; increment
// for(var i = 1 ; i <= 3 ; i++){

//     console.log('Looping ke: ' + i)

// }

// console.log('Selesai Looping For')

// angka ganjil 1-10 : 1 3 5 7 9
// for(var i = 1; i <= 10; i+=2 ){
//     console.log('Looping: ' + i)
// }

// for(var i = 1%2; i <= 10 ; i+=2){
//     console.log('Looping: ' + i)
// }

// i = 10   true

// looping 1
// looping 3
// looping 9

// for(var i = 1 ; i <=10 ; i++){
//     if(i % 2 == 1){ // ganjil
//         console.log('Looping: ' + i)
//     }
// 
// angka genap 0 - 10 : 0 2 4 6 8 10

// for(var i = 0; i <= 10; i+=2 ){
//     console.log('Looping: ' + i)
// }

// for(var i = 1 ; i <=10 ; i++){
//     if(i % 2 == 0){ // genap
//         console.log('Looping: ' + i)
//     }
// }

// LOOP DRAWING
//  * * * * *
// var bintang = ''

// for(var i = 1; i <= 5; i++){
//     bintang += ' * '
// }

// console.log(bintang)

// *
// *
// *
// *

// var bintang = ''

// for(var i = 1; i <= 5; i++){
//     bintang += ' * \n'
// }

// console.log(bintang)


// * * * *
// * * * *
// * * * *
// * * * *

// var angka = 5
// var bintang = ''

// // looping 'i' untuk menentukan banyak baris
// for(var i = 1; i <= angka; i++){

//     // looping 'j' banyak bintang per baris
//     for(var j = 1; j <= angka; j++){
//         bintang += ' * '
//     }

//     bintang += '\n'

// }

// console.log(bintang)


// * 
// * *
// * * *
// * * * *

var angka = 3
var bintang = ' * \n *  * \n *  *  * \n'

// looping 'i' untuk menentukan banyak baris
for(var i = 1; i <= angka; i++){

    // looping 'j' banyak bintang per baris
    for(var j = 1; j <= i; j++){
        bintang += ' * '
    }

    bintang += '\n'

}

console.log(bintang)


