
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

    // skill berisi array, akan di loop untuk di ambil valuenya
    let skill = document.querySelectorAll('input[name=skill]:checked')
    let skillFull = ''

    for(var i = 0; i < skill.length; i++){
        skillFull += ` ${skill[i].value},`
    }

    // menghilangkan koma di akhir
    skillFull = skillFull.slice(0, -1)
    // HTML5, CSS 3, Javascript,

    let p = document.getElementById('disini')
    p.innerHTML = `Nama: ${nama.value} <br> 
    Usia: ${usia.value} <br>
    Gender: ${gender.value} <br>
    Job: ${job.value} <br>
    Skill: ${skillFull}`

}