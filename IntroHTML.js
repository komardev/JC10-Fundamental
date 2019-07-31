
let myfunction = () => {
    // mengambil element html yang memiliki id = 'nama
    // 'name' akan berupa object yg memiliki banyak property
    // property 'value' menyimpan data yang kita ketik
    let nama = document.getElementById('nama')
    let usia = document.getElementById('usia')
    // get document dengan query CSS
    // get element input yg memiliki attribute name = gender
    // dan property checked bernilai true
    let gender = document.querySelector('input[name=gender]:checked')
    let job = document.getElementById('pekerjaan')

    
    let p = document.getElementById('disini')
    p.innerHTML = `Nama: ${nama.value}, Usia: ${usia.value}, Gender: ${gender.value}, Job: ${job.value}`

}