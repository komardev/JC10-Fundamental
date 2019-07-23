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

function satu(x, fn){
    console.log('Nilai X : ' + x)

    // calling function
    console.log('Yang masuk ke fn : ' + fn);
    
    // return undefined
}

function dua(){
    console.log('Ini dari function dua')
    // return undefined
}

satu(43, dua)
