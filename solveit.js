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

// var jumlahHari = hariAwal = 485 

// Cari berapa tahun
// var tahun = Math.floor(jumlahHari / 360)
// Cari sisa hari setelah tahun
// jumlahHari = jumlahHari % 360

// var bulan = Math.floor(jumlahHari / 30)
// jumlahHari = jumlahHari % 30

// var minggu = Math.floor(jumlahHari / 7)
// jumlahHari = jumlahHari % 7

// \n untuk menggeser kalimat berikutnya di baris baru
// console.log(
    // hariAwal + ' hari : \n' +
    // tahun + ' tahun\n' +
    // bulan + ' bulan\n'  +
    // minggu + ' minggu\n' +
    // jumlahHari + ' hari'
    
// )

// SOLVE IT 5
// A + B = 49
// var totalUmur = 49
// Rasio = 0.4 -> 4 / 10 -> 2 / 5 -> 2 : 5
// Total Rasio = 2 + 5 = 7

// atas dan bawah dibagi dengan angka yang sama 
// 30 / 15 -> 6 / 3 -> 2 / 1

// var rasioAndi = 2
// var rasioBudi = 5
// var totalRasio = 7

// var Andi = totalUmur * (rasioAndi / totalRasio)
// var Budi = totalUmur * (rasioBudi / totalRasio)

// var AndiNext  = Andi + 2
// var BudiNext  = Budi + 2

// console.log('Andi :' + (Andi + 2));
// console.log('Budi: ' + (Budi + 2));
// console.log('Andi :' + AndiNext);
// console.log('Budi: ' + BudiNext);

//  SOLVE IT 6

// var today = new Date()
// var yesterday = new Date()
// var tomorrow = new Date()

// tomorrow.setDate(today.getDate() + 1)
// yesterday.setDate(today.getDate() - 1)

// console.log(today);
// console.log(yesterday);
// console.log(tomorrow);

// console.log(
//     'Hari ini: ' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
//     + '\n' +'Kemarin: ' + yesterday.getDate() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getFullYear()
//     + '\n' + 'Besok: ' + tomorrow.getDate() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getFullYear()
// );

// SOLVE IT 7 

// var teks1 = 'Abracadabra'
// Banyak karakter pada sebuah teks / kalimat
// var panjang1 = teks1.length
// hilangkan 'a'
// var teks2 =  teks1.replace(/a/g, '')
// Banyak karakter setelah di hilangkan
// var panjang2 = teks2.length

// Cari selisih sebelum dan sesudah
// var hasil = panjang1 - panjang2

// console.log('Jumlah huruf a = ' + hasil);

// SOLVE IT 8

// var A = 60
// var B = 40
// var jarak = 120

// var waktu = jarak / (A + B)
// var jam = Math.floor(waktu)
// var menit = (waktu * 60) % 60

// var tabrakan = 9 + jam + ':' + menit

// console.log(tabrakan);


// SOLVE IT 9

// 0, - 99,
// var pertama = Math.random() * 100

// // 0 - 99
// var nilaiRandom = (Math.floor(pertama))

// // 1 - 100
// var final = nilaiRandom + 1

// console.log(final);
