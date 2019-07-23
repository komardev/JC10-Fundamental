// Function Declaration
// function sayHello() {

//     console.log('Hello');

// }

// Calling function
// sayHello()

// name : parameter
// function sayHai(name) {

//     console.log(
//         'Hai ' + name
//     )

// }

// sayHai('Peter')

// function jumlah(x, y){

//     var hasil = x + y

//     console.log('x : ' + x);
//     console.log('y : ' + y + '\n');
    
//     // output : hasil
//     return hasil
// }

// var output = jumlah(3, 4)
// var output2 = jumlah(4, 5)
// var output3 = jumlah(5, 6)

// console.log(output + output2 + output3);

// Sebuah function bisa menerima tipe data yang berbeda
// function anytype(str, num, boolean){

//     console.log(str);
//     console.log(num);
//     console.log(boolean);

// }

// anytype('String', 26, true)

// function selalu return 'sesuatu'
// ketika kita tidak menentukan apa yg harus di return
// maka yang di return adalah undefined

// variable yang di deklarasikan didalam function
// tidak bisa di akses di luar function

// CALLBACK FUNCTION
// Function yg di running oleh function lainnya

function dua(){
    console.log('Ini dari function dua')
    // return undefined
}

function satu(x, fn){
    console.log('Nilai X : ' + x)

    // calling function
    // fn berisi sebuah function
    fn()
    
    // return undefined
}

// 'dua' tidak memerlukan ()
// satu(43, dua)

function tiga(q, fn){
    // q = 5
    //  fn = function empat
    console.log('Nilai Q: ' + q);

    // nilai pada 'q' akan masuk ke 'x' milih function empat
    fn(q)
    
}

function empat(x) {
    console.log(x + ' di kali dua : ' + (x *2))
}

// tiga(5, empat)

function lima(number, fun){
    console.log('number kuadrat :' + ( number * number))

    fun()
}

// lima(5, function() {console.log('Fn tanpa declaration')})

function enam(x, fn) {
    // x : 9
    // fn: function tujuh
    var num1 = 25
    var num2 = 35

    console.log('Nilai X adalah ' + x)

    fn(num1, num2)

}

function tujuh(y, z){
    // y : num1
    // z : num2
    console.log('Y + Z : ' + ( y + z))
}

enam(9, tujuh)