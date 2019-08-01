// Array untuk render list manusia
let arrManusia = [
  { nama: "Alex", umur: 22, job: "Dev" },
  { nama: "Alicia", umur: 32, job: "Dev" },
  { nama: "Alona", umur: 26, job: "Dev" },
  { nama: "Batios", umur: 33, job: "CEO" },
  { nama: "Bakhti", umur: 38, job: "PM" },
  { nama: "Charlee", umur: 27, job: "CTO" }
];

// Array untuk render list job
let arrJob = ["All", "Dev", "CEO", "PM", "CTO"];

// INPUT DATA
let funInputData = () => {
  // Get data
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let job = document.getElementById("jobInput").value;

  // Push data
  arrManusia.push({
    nama,
    umur,
    job
  });

  // Check job / Menambahkan daftar pekerjaan jika belum ada di array
  let ada = arrJob.includes(job)

  if(!ada){
      arrJob.push(job)
  }

  funShow();
};

// RENDER LIST
let funShow = () => {
  let listManusia = arrManusia.map(val => {
    // val = {name, age, job}
    return `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
        </tr>`;
  });

  let listJob = arrJob.map(val => {
    // val = 'All', 'Dev', 'CTO ...
    return `<option value="${val}">${val}</option>`;
  });

  document.getElementById("here").innerHTML = listManusia.join("");
  document.getElementById("job").innerHTML = listJob.join("");
};

// FILTER NAME
let funFilterName = () => {
    // Get data from user
    let filter = document.getElementById('search').value

    // Filtering
    let hasilFilter = arrManusia.filter((val) => { // val = {nama, age, job}
        // kecilkan semua huruf nama
        let namaLow = val.nama.toLowerCase()
        // kecilkan semua karakter yang di ketik user
        let filterLow = filter.toLowerCase()

        return namaLow.includes(filterLow)
    })
    
    // Render list
    let list = hasilFilter.map((val) => {
        return `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
        </tr>`
    })

    // Munculkan hasil render
    document.getElementById('here').innerHTML = list.join('')

}

// FILTER USIA
let funFilterUmur = () => {
    // num1 = min
    let num1 = document.getElementById('num1').value
    // num2 = max
    let num2 = document.getElementById('num2').value

    let list

    if(!(num1 == '' || num2 == '')){
        list = arrManusia.filter((val) => {
            return (val.umur >= num1 && val.umur <= num2)
        })
    }

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')

}

// FILTER JOB

funShow();



/*
onClick = event handler

onKeyup =

onInput
*/


