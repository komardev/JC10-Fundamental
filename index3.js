// // Function Declaration
// // function sayHello() {

// //     console.log('Hello');

// // }

// // Calling function
// // sayHello()

// // name : parameter
// function sayHai(name) {

//     console.log(
//         'Hai ' + name
//     )

// }

// sayHai('Peter')

// // function jumlah(x, y){

// //     var hasil = x + y

// //     console.log('x : ' + x);
// //     console.log('y : ' + y + '\n');
    
// //     // output : hasil (integer)
// //     return hasil
// // }

// // var output = jumlah(3, 4)
// // var output2 = jumlah(4, 5)
// // var output3 = jumlah(5, 6)

// // console.log(output + output2 + output3);

// // Sebuah function bisa menerima tipe data yang berbeda
// // function anytype(str, num, boolean){

// //     console.log(str);
// //     console.log(num);
// //     console.log(boolean);

// // }

// // anytype('String', 26, true)

// // function selalu return 'sesuatu'
// // ketika kita tidak menentukan apa yg harus di return
// // maka yang di return adalah undefined

// // variable yang di deklarasikan didalam function
// // tidak bisa di akses di luar function

// // function dapat mengakses variabel di luar function tsb
// // kode diluar function tidak bisa mengakses variabel yg ada di dalam function

// // CALLBACK FUNCTION
// // Function yg di running oleh function lainnya

// function dua(){
//     console.log('Ini dari function dua')
//     // return undefined
// }

// function satu(x, fn){
//     console.log('Nilai X : ' + x)

//     // calling function
//     // fn berisi sebuah function
//     fn()
    
//     // return undefined
// }

// // 'dua' tidak memerlukan ()
// // satu(43, dua)

// function tiga(q, fn){
//     // q = 5
//     //  fn = function empat
//     console.log('Nilai Q: ' + q);

//     // nilai pada 'q' akan masuk ke 'x' milih function empat
//     fn(q)
    
// }

// function empat(x) {
//     console.log(x + ' di kali dua : ' + (x *2))
// }

// // tiga(5, empat)

// function lima(number, fun){
//     console.log('number kuadrat :' + ( number * number))

//     fun()
// }

// // lima(5, function() {console.log('Fn tanpa declaration')})

// function enam(x, fn) {
//     // x : 9
//     // fn: function tujuh
//     var num1 = 25
//     var num2 = 35

//     console.log('Nilai X adalah ' + x)

//     fn(num1, num2)

// }
// function tujuh(y, z){
//     console.log(y)
//     console.log(z)
//     // y : num1
//     // z : num2
//     console.log('Y + Z : ' + ( y + z))
// }

// // enam(9, tujuh)

// // function return function
// function delapan () {

//     console.log('EZ yah ?');
    
//     return function() { // masuk ke 'itu'
//         console.log('Function hasil return dari function delapan');
        
//     }

// }

// var ini = delapan
// var itu = delapan()

// ini() // function delapan
// itu() // function yg ada di line 128

// var nama = 'Druid'
// var copy = nama



// function pengurangan(x, y){
//     var hasil = x - y

//     return hasil
// }

// var result = pengurangan(3, 4)

// var halo = 65

// console.log(result);

// tidak di rekomendasikan membuat variabel tanpa keyword var / let
// function total(x,y) {
//     z = x + y
//     return z
// }

// console.log(total(4,5))
// console.log(z)

// function Pangkat(x, y){
//     // x : 7
//     // y : 1
//     if( y == 1){
//         return x
//     } else {
//         return x = x * Pangkat(x, y-1)
//     }
// }

// var hasil = Pangkat(7, 1) // 7
// var hasil = Pangkat(7, 2) // 49
// var hasil = Pangkat(7, 3)

// console.log(hasil)
// function sayHello(){
//     console.log('Hello ...')
// }

// console.log('Pertama');
// 3000 ms = 3 detik
// Function sayHello akan jalan setelah 3 detik
// var x = setTimeout(sayHello, 3000)
// Cancel setTimeout
// clearTimeout(x)
// console.log('Terakhir');
// setInterval(sayHello, 1500)

// ARRAY

// var buah1 = 'Apel'
// var buah2 = 'Belimbing'
// var buah3 = 'Ceri'

// index dimulai dari 0


// console.log(buah);
// console.log(buah.toString());
// console.log(buah.join(' dan '));

// console.log(buah[0])
// console.log(buah[1])
// console.log(buah[2])


var buah = ['Apel', 'Belimbing', 'Ceri']

// Banyaknya data pada array
console.log('Banyak data : ' + buah.length);

// Looping sebanyak data yg ada di array
for(var i = 0; i < buah.length; i++){
    console.log('Buah ' + buah[i])
}





















