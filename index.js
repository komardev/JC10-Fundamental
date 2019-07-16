/*
Ini komentar baris satu
baris dua
baris tiga
*/

// Perintah untuk print sesuatu di terminal
// console.log('Hello world !')

// Print lokasi folder kita saat ini
// console.log(__dirname)

// Print lokasi file kita saat ini
// console.log(__filename)

// CTRL + J, munculkan terminal
// CTRL + /, Membuat / menghilangkan komentar

// VARIABLE
// Tempat menyimpan satu data

// Membuat variable 'nama', di isi data 'Andi'
// var nama = 'Andi'
// Ubah nilai pada variable 'nama' menjadi 'Puck'
// nama = 'Puck'
// console.log(nama) 

// var usia
// usia = 22
// usia = 45
// console.log(usia)

// let tidur = true // boolean: true dan false
// console.log(tidur)


// VAR VS LET

// Tidak masalah
var hari = 'Senin'
// var hari = 'Selasa'
// console.log(hari)

// Error, karena mendeklarasikan variable yang sudah ada
// let buah = 'Apel'
// let buah = 'Semangka'
// console.log(buah)


// Strings & Numbers
// Strings --> Teks / kumpulan karakter di apit tanda kutip
// Numbers : 1. Integer (Bilangan bulat: 0, 1, 23)
//           2. Float (Bilangan decimal: 0.45, 0.89)

// var tempat
// var _underscore
// var $dollarsign

// var nama = 'Zondo' // string
// var tanggal = 22 // number
// var single = true
// var profesi

// var hasil = typeof(profesi)
// console.log(hasil)

// console.log(typeof(nama))
// https://github.com/rochafialvin/JC10-Fundamental


var teks = 'Halo$Dunia$Selamat$Sore'

// console.log(teks.length) // Jumlah karakter dari string
// console.log(teks.indexOf('Dunia')) // Menemukan index / posisi
// console.log(teks.indexOf('a'))
// console.log(teks.substr(5,4)); // mengambil dari index 5 sebanyak 4 karakter
// console.log(teks.slice(5, 9)) // mengambil dari index 5 sampai index ke 8
console.log(teks.split('a')) // Split berdasarkan karakter tertentu