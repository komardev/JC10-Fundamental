// SOlVE IT #1
// let hari, minggu, bulan
// var x = 4, y = 3, z = 2


// var w = ((x + y * z) / (x * y)) ** z
// var wRound = Math.round(w)

// console.log(w)
// console.log(wRound)

// SOLVE IT 2
// Buat sebuah prompt menerima angka lalu di kuadratkan

// Menerima input  user
// var input = prompt('Silahkan masukkan angka: ')
// Mengkuadratkan input user
// var hasilKuadrat = Math.pow(input, 2)

// alert('Kuadrat dari ' + input + ' = ' + hasilKuadrat)
// console.log('Kuadrat dari ' + input + ' = ' + hasilKuadrat )



// SOLVE IT 3
// console.log(Math.cbrt(8));


//  SOLVE IT 4

var jumlahHari = hariAwal = 485 

// Cari berapa tahun
var tahun = Math.floor(jumlahHari / 360)
// Cari sisa hari setelah tahun
jumlahHari = jumlahHari % 360

var bulan = Math.floor(jumlahHari / 30)
jumlahHari = jumlahHari % 30


var minggu = Math.floor(jumlahHari / 7)
jumlahHari = jumlahHari % 7

console.log(
    hariAwal + ' hari : \n' +
    tahun + ' tahun\n' +
    bulan + ' bulan\n'  +
    minggu + ' minggu\n' +
    jumlahHari + ' hari'
    
)




