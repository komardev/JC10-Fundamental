var nama = prompt('Nama')
var bing = parseInt(prompt('Nilai B.Inggris'))
var bind = parseInt(prompt('Nilai B.Indonesia'))
var mtk = parseInt(prompt('Nilai Matematika'))
var ipa = parseInt(prompt('Nilai IPA'))

var nilaiAkhir = (bing + bind + mtk + ipa) / 4

var indexNilai, lulus, greet

if(nilaiAkhir >= 85){ // lebih besar sama dengan 85
    indexNilai = 'A'
    lulus = true
} else if(nilaiAkhir >= 76 && nilaiAkhir <= 84){ // 76 - 84
    indexNilai = 'B'
    lulus = true
} else if(nilaiAkhir >= 66 && nilaiAkhir <= 75){ // 66 - 75
    indexNilai = 'C'
    lulus = true
} else if(nilaiAkhir >= 50 && nilaiAkhir <= 65){ // 50 - 65
    indexNilai = 'D'
    lulus = false
} else {
    indexNilai = 'E'
    lulus = false
}

if(lulus){
    greet = 'Selamat, Anda lulus'
} else {
    greet = 'Mohon maaf, Anda tidak lulus'
}

console.log(
    'Nama: ' + nama +
    '\nDengan nilai akhir : ' + nilaiAkhir +
    '\nIndex Nilai: ' + indexNilai + '\n' +
    greet
);
