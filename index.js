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



// var teks = 'Halo$Dunia$Selamat$Sore'

// console.log(teks.length) // Jumlah karakter dari string
// console.log(teks.indexOf('Dunia')) // Menemukan index / posisi
// console.log(teks.indexOf('a'))
// console.log(teks.substr(5,4)); // mengambil dari index 5 sebanyak 4 karakter
// console.log(teks.slice(5, 9)) // mengambil dari index 5 sampai index ke 8
// console.log(teks.split('a')) // Split berdasarkan karakter tertentu





// var x = 'halo'
// var y = 'DUNIA'
// var z = 'Hai, sudah sampai pantai nih'
// var angka = 1234
// console.log(angka)
// console.log(typeof(angka));

// Mengubah tipe data number menjadi string
// console.log(angka.toString())

// Hanya mengganti 'ai' yang pertama ditemukan
// console.log(z.replace('ai', 'ia'))
// Mengganti semua 'ai' yang ada
// console.log(z.replace(/ai/g, 'ia'));
// // Mengubah data ke huruf kapital
// console.log(x.toUpperCase());
// // Mengubah data ke huruf kecil
// console.log(y.toLowerCase())

// var angka = '2019'
// var teks = 'Halo Dunia'

// Tipe data string
// console.log(angka);

// Mengubah string ke integer
// var hasilAngka = parseInt(angka) // Number
// var hasilTeks = parseInt(teks) // NaN (Not a Number)

// Tipe data number
// console.log(hasilAngka)
// console.log(hasilTeks)
// console.log(typeof(hasilTeks))
// Tipe data 'angka' tidak berubah
// console.log(angka);

// huruf, underscore, $

// camelCase
// var purwadhikaStartupAndCodingSchool

// var purwadhika_stratup_and_coding_school

// var usia = 29
// var usiaString = '30'
// var umurString = '32'
// var namaDepan = 'Brew'
// var namaBelakang = 'Master'

// console.log(usia + usiaString) // usia akan di ubah ke string
// console.log(umurString + usiaString)
// console.log(usia + usia) // perhitungn biasa

// console.log(namaDepan + namaBelakang)
// console.log(namaDepan + usia)
// console.log(namaDepan + ' ' +  usia)
// console.log(namaDepan + ' ' + namaBelakang)

// operator (+ * ..) dan operand (angka yg dihitung)

// var usiaAndi = 40
// var usiaBudi = 20

// SHIFT + ALT + Arrow bawah 
// console.log(usiaAndi + usiaBudi)
// console.log(usiaAndi - usiaBudi)
// console.log(usiaAndi * usiaBudi)
// console.log(usiaAndi / usiaBudi)
// console.log(usiaAndi % usiaBudi)
// console.log(usiaBudi ** 2) Pangkat dua

// MODULUS

// 20 % 5 = 20 dibagi 5, Dapat 4, sisanya 0
// 23 % 5 = 23 dibagi 5, Dapat 4, sisanya 3


// console.log(12343423424 % 2)
// console.log(2 % 2)
// console.log(3 % 2)
// console.log(4 % 2)
// console.log(5 % 2)

// var angkaPertama = 35

// Menambah angkaPertama dengan 1
// angkaPertama + 1
// Menambah angkaPertama dengan 1, dan menggantinkan nilai yg lama
// angkaPertama++
// Menambah 1 kemudian di print, tanpa mengganti nilai sebelumnya
// console.log(angkaPertama+1); // 37
 36
// angkaPertama = angkaPertama + 1 // 37
// console.log(angkaPertama); // 37
// angkaPertama++ // 38
// angkaPertama++ // 39

// console.log(angkaPertama  % 2); // 39 % 2 = 1

// var angkaKedua = 27
// angkaKedua-- // 26
// angkaKedua++ // 27
// angkaKedua + 1
// console.log(angkaKedua); // 27

// angkaKedua-- // 26
// console.log(angkaKedua); // 26
// angkaKedua = angkaKedua - 1 // 25

// console.log(angkaKedua % 2); // 1

// 27 26 1
// 28 27 0
// 26 27 28
// 28 26 1


// let numbOne = 9

// numbOne + 1

// console.log(numbOne);

// Update nilai variable
// numbOne = numbOne + 5
// numbOne += 5
// numbOne %= 5

// console.log(numbOne);
// Membuat variable dengan nama sama
// let month
// let month

// console.log(Math.PI);
// Absolut, mengubah menjadi bilangan positif
// console.log(Math.abs(-4.7));
// Pangkat, 8 pangkat 2
// console.log(Math.pow(8, 2)); // 8 ** 2
// Akar dua, akar dua dari 64
// console.log(Math.sqrt(64));
// Akar tiga dari 8
// console.log(Math.cbrt(8));


// Round, Ceil & Floor

// Round: Pembulatan matematika
// Ceil: Pembulatan ke atas
// Floor: Pembulatan ke bawah

// TEKAN ALT
// var hasilRound = Math.round(4.7)
// console.log(hasilRound)
// let hasilRnd =  Math.round(4.4)
// console.log(hasilRnd)
// var hasilCeil =  Math.ceil(4.3)
// console.log(hasilCeil)
// let hasilFloor = Math.floor(4.9)
// console.log(hasilFloor)


// Random, Max & Min

// 0 - 0.9
// var hasil = Math.random()
// console.log(hasil);

// 0.1 *  10 = 1
// 0.9 * 10 = 9

// Random 0 - 9
// var random10 = Math.random() * 10
// console.log(random10);

// Random 0 - 10
// var random10 = Math.random() * 11
// console.log(random10);

// Random Dadu ( 1 - 6 )
// var randomDice = Math.random() * 6 // 0, .. - 5, ..
// console.log(randomDice);

// Dibulatkan ke bawah // 0 - 5 
// var hasilDice = Math.floor(randomDice)
// Dijumlahkan dengan satu 
// console.log(hasilDice + 1);

// 0, - 5,
// var randomDice = Math.random() * 6 
// console.log(randomDice);

// 1 - 6
// var hasilDice = Math.ceil(randomDice) 
// console.log(hasilDice);

// Basic Date Object

// var waktu = new Date()

// console.log(waktu.getFullYear());
// Januari = 0
// console.log(waktu.getMonth());
// console.log(waktu.getDate());
// console.log(waktu.getDay());
// console.log(waktu.getHours());
// console.log(waktu.getMinutes());
// console.log(waktu.getSeconds());
// console.log(waktu.getMilliseconds());

// Logif IF dan SWITCH

// Comparison Operators

// BOOLEAN : true , false

// var usia = 24
// var string = '25'

// console.log(4 == 4)
// console.log(4 === 4)
// Tipe data di abaikan
// console.log(4 == '4')
// Tipe data di perhitungkan
// console.log(4 === '4')

// console.log(usia < string);


var benar = 4 < 5 // true
var salah = 4 > 5 // false

// AND , &&
// Keduanya TRUE, maka hasilnya TRUE
// Salah satu FALSE, maka false

// console.log(benar && benar); // true
// console.log(salah && benar ); // false

// OR , ||
// Salah satu TRUE, maka hasilnya TRUE
// Keduanya FALSE, maka FALSE

// console.log(benar || salah) // true
// console.log(salah || salah) // false

// console.log(!benar); //false
// console.log(!salah); // true





// Jika yang di dalam kurung bernilai true
// maka yang di dalam kurawal akan di jalankan
// if(hujan){
//     pakai payung
// }

// var umur = 27
// var ktp = true
// var sim = false

// if(umur > 18 && ktp && sim){
//     console.log('Boleh berkendara')
// } else {
//     console.log('Belum boleh berkendara')
// }

// var umur = 'hghg'

// if ( umur < 18){
//     console.log('Kurang dari 18');

// } else if (umur == 18){
//     console.log('Pas 18 tahun')

// } else if ( umur > 18 && umur < 25){
//     console.log('Di antara 18 - 24');
// }
// else if (isNaN(umur)){
//     console.log('Bukan angka');
// } else {
//     console.log('Lebih dari 24 tahun');
// }

var single = true

if(single){
    console.log('Masih sendiri');
    
} else {
    console.log('Tidak lagi sendiri');
    
}
































 