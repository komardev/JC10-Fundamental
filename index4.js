// OBJECT
// Mampu menyimpan banyak data seperti array
// Jika pada array menggunakan index, menggunakan key
// Mampu menyimpan banyak data (String, Number, Boolean ... )

// Variabel di dalam object dinamakan 'property'
// Function di dalam object dinamakan 'method'
// This akan menenunjuk object dimana 'this' itu dipanggil
// var manusia = {
//     // key : value
//     firstName : 'Angga',
//     lastName : 'Candra',
//     age : 32,
//     job: 'Artist',
//     sayHello: function(nama) {
//         console.log('Hello ' + nama)
//     },
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// console.log(manusia);
// var namaLengkap = manusia.fullName()
// console.log(namaLengkap);

// manusia.sayHello('Kevin')
// console.log(manusia.firstName)
// console.log(manusia.lastName)

// Object Literal

// var orang = {firstName: 'Janice', lastName: 'Manuella'}
// console.log(orang);
// Menambahkan property
// orang.job = 'Lawyer'
// orang.makan = function() {
    // console.log('Sedang makan');
    
// }
// console.log(orang)
// menghapus property
// delete orang.firstName
// orang.makan()
// console.log(orang);

// 'new'
// var person = new Object()

// console.log(person);

// person.name = 'Rimu'
// person.age = 31

// console.log(person);

// Object Constructor
// var manusia = function(nama, umur, job){
//     this.firstName = nama,
//     this.age = umur,
//     this.job = job
// }

// var baron = new manusia('Baron', 21, 'Lead Academic')
// var brian = new manusia('Brian', 27, 'Lead Tech')
// console.log(baron);
// console.log(brian);

// "Sub Property Two 45"
// var objOne = {
//     propOne: 'String biasa',
//     propTwo: {
//         subPropOne : 23,
//         subPropTwo: function(x) {
//             console.log('Sub Property ' + x) 
//         }
//     },
//     propThree : ["Red", "Green", "Blue"],
//     propFour: [
//         12,
//         {insideOne: 44, insideTwo: 45}
//     ]
// }
// objOne.propFour[0] // 12 
// objOne.propTwo.subPropTwo(45) // 'Sub Property 45'

// var hari = {
//     pertama: "Senin",
//     kedua: "Selasa",
//     ketiga: "Rabu",
//     keempat: "Kamis",
//     kelima: "Jumat",
//     keenam: "Sabtu"
// }

// console.log(hari.pertama);
// console.log(hari['pertama']);

// Loooping For In
// namaProp akan berisi property yg ada di dalam object hari
// for (var namaProp in hari){
//     console.log(namaProp + ' : ' + hari[namaProp]);
// }


// Class , Template terbaru
class MakhlukHidup {
    constructor(place, hidup){
        // Properties
        this.tempatTinggal = place,
        this.bernyawa = hidup
    }

    // Methods
    makan(sesuatu) {
        console.log('Sedang Makan ' + sesuatu)
    }

    bernafas() {
        console.log('Sedang bernafas');
    }
}

var simba = new MakhlukHidup('Bumi', true)
console.log(simba);
simba.makan('Cereal')
