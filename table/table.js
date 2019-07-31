// array of object, {name, age, sex, job}
// <tr><td></td></tr>
let arrHuman = []


// get data  manusia
var fun1 = () => {
    let data_name = document.getElementById('name').value
    let data_age = document.getElementById('age').value
    let data_sex = document.querySelector('input[name=sex]:checked').value
    let data_job = document.getElementById('job').value

    arrHuman.push(
        {
            name : data_name,
            age: data_age,
            sex : data_sex,
            job : data_job
        }
    )

    show1()
}

var show1 = () => {
    // human = {name, age, sex, job}
    let list = arrHuman.map((human) => {
                return `<tr>
                    <td>${human.name}</td>
                    <td>${human.age}</td>
                    <td>${human.sex}</td>
                    <td>${human.job}</td>
                </tr>`
            })

    document.getElementById('mans').innerHTML = list.join('')
}