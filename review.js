// falsy value
/*
- false
- '' and "" (empty string)
- 0
- null
- undefined
- NaN
*/

// var teks = ''
// var angka = -9
// var x = 1

// false && false
// false && true
// false
// if(x < 0 && (x == 0 && x > 0)){
//     console.log('Bernilai true');
// } else {
//     console.log('Bernilai false');
// }

// if(angka) {
//     console.log('Angka bernilai true')
// } else {
//     console.log('Angka bernilai false');
// }

// if(teks){
//     console.log('Teks ada isinya')
// } else {
//     console.log('Teks merupakan string kosong');
// }

// Loop
/*
 Suatu mekanisme pada javascript yang memungkinkan
 kita untuk melakukan sebuah operasi secara berulang
 ketika suatu kondisi tertentu terpenuhi (true)
*/

// do while
// Memunculkan 'Hai' sebanyak 5 kali
// var angka = 0
// do {
//     console.log('Hai')
//     console.log(`value dari variable nilai : ${angka}` )
//     console.log('value dari variable nilai : ' + angka);
    
//     angka += 1
//     angka++
// } while (angka < 5);

// while
// var angka = 0

// while (angka < 5) {
//     console.log(`value dari variable nilai : ${angka}` )

//     angka += 1
// }

// console.log('Selesai');


// document.write()

// var paragraph = document.getElementById('asdf')
// var legendElement = document.getElementById('legend')

// console.log(legendElement);

// tag break <br> untuk membuat baris baru
// paragraph.innerHTML = '<strong>Tag Strong</strong> <br> <em>Tag Emp</em>'


// Array

// let random = ['Mangga', 'Pisang']
// console.log(random)

// Menambahkan data dari belakang , menggunakan push
// random.push('Jambu')

// console.log(random)


// default dari join adalah karakter koma (,)
// let hasilJoin = random.join()

// console.log(hasilJoin)
// console.log(...random);

// Mapping Array
// map() sebuah function untuk mengubah bentuk data pada array ke bentuk lainnya
// let users = [
//     {name: 'Rostchild', job: 'Owner of the new world', age: 56},
//     {name: 'Disney', job: 'Editor', age: 45},
//     {name: 'Alex', job: 'Rapper', age: 30}
// ]

// let hasilButton = users.map((obj) => {
//     return `<button>${obj.name}</button>`
// })

// let x = `<button>Rostchild</button>
// <button>Disney</button>
// <button>Alex</button>`

// console.log(hasilButton)
// document.getElementById('asdf').innerHTML = hasilButton.join(' ')
// document.getElementById('qwerty').innerHTML = x

// item : berisi element
// let hasilString = users.map((item) => {
//     return `${item.name}`
// })

// Filtering Array
// filter() untuk memilih mana data yang akan tetap ada, mana yang akan dihilangkan
// return true : tetap ada
// return false : dihilangkan

// let numbers = [23, 12, 35, 56, 79]

// filtering angka genap
// let hasilGenap = numbers.filter((angka) => {
//     return angka % 2 == 0
// })

// filtering angka ganjil
// let hasilGanjil = numbers.filter((angka) => {
//     return angka % 2 == 1
// })
// console.log(hasilGenap);
// console.log(hasilGanjil);


// sort
// ASCENDING / ASC / rendah ke besar (A - Z) (1 - 9)
// DESCENDING / DSC / besar ke rendah (z - A) (9 - 1)

// callback function pada sort akan menerima dua input
// callback function harus return nilai < 0 atau nilai > 0 atau nilai == 0

// return < 0 , 'a' memiliki index yang lebih kecil dari 'b'
// return 0, tidak ada perubahan posisi
// return > 0, 'b' memiliki index yang lebih kecil dari 'a'

// return true, posisi 'a' dan 'b' bertukar
// return false, posisi 'a' dan 'b' tidak di tukar

var name = ['Tony', 'Peter', 'Bruce', 'Thor', 'Loki']

var number = [3, 17, 9 , 12, 10]

console.log(number)
// ASC 1
number.sort((a, b) => {
    return a > b
})
// ASC 2
number.sort((a, b) => {
    return a - b
})

console.log(number)
// DSC 1
number.sort((a, b) => {
    return a < b
})
// DSC 2
number.sort((a, b) => {
    return b - a
})

console.log(number)
/*
[20, 10]

[14, 32]

a : 14
b : 32
(14, 32 ) => {
    a - b = -18
}
*/




















