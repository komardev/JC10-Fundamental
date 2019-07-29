// CONSTANT
// variable yang nilainya tidak boleh / bisa di ubah

// const bunga = 0.3

// bunga = 0.5
// console.log(bunga)
// Error

// VARIABLE SCOPE
/*
Darimana suatu variable dapat di akses

VAR
    - Hanya di batasi oleh function

LET & CONST
    - Dibatasi oleh function dan kurung kurawal
*/

// function scope() {
//     var didalam = 14
//     let doom = 666
//     const pi = 3.14
// }

// if(true){
//     var diluar = 35
//     let doomed = 999
//     const hour = 24
// }

// console.log(doom)
// console.log(pi);
// console.log(hour)
// console.log(didalam) // tidak bisa


// TEMPLATE STRING

// TICK , ada di bawah tombol ESC
// let teks = `Halo

//    Dunia`

// let text = 'Halo \n Dunia'

// console.log(teks);
// console.log(text)

// function something(name, number){
//     console.log(
//         'HAAAAII ' + name
//     )

//     console.log( // ES6
//         `HAAAAII I'm ${name} "Kutip dua" `
//     )

//     console.log(
//         number + ' dikali dua = ' + (number*2)
//     )

//     console.log( // ES6
//         `${number} dikali dua = ${number * 2}`
//     )
// }

// something('Fake', 3)



// INCLUDES
// Memeriksa apakah sebuah karakter ada di dalam teks tertentu

// let kalimat = 't-shirt mahal'

// let hasil = kalimat.includes('shirt') // true
// let result = kalimat.includes('Shirt') // false

// console.log(hasil);
// console.log(result);


// DEFAULT PARAMETER
// Value yang akan digunakan jika tidak ada nilai yg masuk ke parameter

// var kuadrat = function(angka = 3){
//     console.log(angka * angka)
// }

// kuadrat()

// ARROW FUNCTION
// Hilangkan keyword 'function', tambahkan '=>'
// var sayHello = (name) => {
//     console.log(`Hello ${name}`)
// }

// Hapus kurung kurawal jika kode yg dijalankan singkat
// var sayHai = (name) => console.log(name)

// var renumb = (angka, number) => {
//     return angka * number
// }
// hapus kurung kurawal dan return
// var renumb = (angka, number) => angka * number

// var retangka = (angka) => {
//     return angka * 2
// }
// hapus kurung kurawal , return, kurung di parameter
// var retangka = angka => angka * 2


// sayHello('Maverick')
// sayHai('Rudolf')



// ARRAY FILTERING
/*
 - filter() menerima satu input berupa function (callback)
 - callback function menerima satu input berupa data dari array
 - callback function HARUS return TRUE atau FALSE
 - jika return TRUE, data akan tetep ada, jika FALSE akan menghilang
 - filter() me return array baru
*/
// let angka = [12, 13, 14, 15]

// let hasil = angka.filter(
//     (element) => {return element < 3}
// )

// let ganjil = angka.filter(
//     (element) => {return element % 2 == 1}
// )

// let genap = angka.filter(
//     (element) => {return element % 2 == 0}
// )

// console.log(angka); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(hasil); // [ 0, 1, 2 ]
// console.log(ganjil)
// console.log(genap)
let number = [12,13,14,15]

let funFilter = (array, fun) => {
    var arrayBaru = []

    for(var i = 0; i < array.length; i++){
        var res = fun(array[i]) // true or false

        if(res){
            arrayBaru.push(array[i])
        }
    }

    return arrayBaru
}

var kurang = (element) => {return element < 14}
var genap = (element) => {return element % 2 == 0}

let end = funFilter(number, kurang)
let endGenap = funFilter(number, genap)

console.log(number)
console.log(end)
console.log(endGenap)