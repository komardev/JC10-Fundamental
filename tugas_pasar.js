/*
1. Memunculkan daftar Menu
    - Ayam @ 25.000
    - Ikan @ 50.000
    - Sapi @ 75.000

    - Minta input menu pilihan

2. Minta inputan quantity 

3. Tanyakan apakah ingin belanja lagi?
    - mengggunakan 'confirm'

    - Jika dia ingin belanja lagi, balik ke langkah 1
    - Jika tidak ingin belanja lagi, lanjut ke langkah 4

4. Munculkan Rincian belanja seperti screenshot
    dan meminta inputan jumlah uang

    - Jika uang yang dimasukkan kurang, ulangi langkah 4
    - Jika tidak kurang, lanjut ke langkah terakhir

Terakhir. Munculkan Rincian belanja, uang yg di bayar, berikut kembalian seperti screenshot
*/

var menu, lanjut,
    produk = ['Ayam', 'Ikan', 'Sapi'],
    harga = [25000, 50000, 75000],
    jumlah = [0,0,0],
    total = [0,0,0],
    totalBelanja, uang, kembali

do {
    menu = parseInt(prompt(
        "Selamat datang di PasarOnline\n"+
        "Daftar Menu : \n"+
        "1. Ayam @ Rp.25.000\n2. Ikan @ Rp. 50.000\n3. Sapi @ 75.000"
    )) -  1
    // menu = (2 - 1) = 1 (ikan)
    // jumlah[1] , produk[1] -> ikan
    jumlah[menu] =  parseInt(prompt('Masukkan jumlah ' + produk[menu]))
    
    // confirm akan me-return true or false
    // klik OK : true, klik cancel : false
    lanjut = confirm('Ingin menambahkan belanjaan ?')
    console.log(lanjut);
        
} while (lanjut);

// Total belanja Ayam, Ayam ada di index 0
total[0] = harga[0] * jumlah[0]
// Total belanja Ikan, Ikan ada di index 1
total[1] = harga[1] * jumlah[1]
// Total belanja Sapi, Sapi ada di index 0
total[2] = harga[2] * jumlah[2]

// Menghitung total belanja
totalBelanja = total[0] + total[1] + total[2]

do {
    uang = parseInt(
        prompt(
            "Total Belanja\n"+
            "Ayam\n" + harga[0] + " x " + jumlah[0] + " = Rp. " + total[0] +
            "\nIkan\n" + harga[1] + " x " + jumlah[1] + " = Rp. " + total[1] +
            "\nSapi\n" + harga[2] + " x " + jumlah[2] + " = Rp. " + total[2] +
            "\n\nTotal Yang harus anda bayar adalah : Rp. " + totalBelanja +
            "\n\nMasukkan jumlah uang Anda :"
        )
    )

    // Cek apakah uangnya kurang ?
    if(uang < totalBelanja){
        // Cari selisih uangnya
        var kurang = totalBelanja - uang
        // Agar mengulang proses input uang kembali
        lanjut = true
        // Munculkan notif
        alert(
            "Jumlah uang yang Anda masukkan kurang Rp. " + kurang +
            "\nTotal Belanja Anda : Rp. " + totalBelanja +
            "\nUang yang anda masukkan : Rp, " + uang
        )
    } else {
        // Cari selisih uang untuk kembalian
        kembali = uang - totalBelanja
        // Agar tidak mengulang proses input uang
        lanjut = false
    }
} while (lanjut);

console.log(
    "Data Belanja" +
    "\n  " + produk[0] + " x " + jumlah[0] + " = Rp." + total[0] +
    "\n  " + produk[1] + " x " + jumlah[1] + " = Rp." + total[1] +
    "\n  " + produk[2] + " x " + jumlah[2] + " = Rp." + total[2] +
    "\n\n  Total belanja  Rp." + totalBelanja +
    "\n  Jumlah uang Rp." + uang +
    "\n  Kembali Rp. " + kembali +
    "\n  Terimakasih"

);