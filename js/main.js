var nameInput = document.getElementById("nameInput")
var ageInput = document.getElementById("nameAge")
var phoneInput = document.getElementById("namePhone")
var trackInput = document.getElementById("nameTrack")
var addresInput = document.getElementById("nameAddres")
var emailInput = document.getElementById("nameEmail")
var imgInput = document.getElementById("nameImg")
var searchInput = document.getElementById("search")
var add = document.getElementById("add")
var update = document.getElementById("update")
var alertName = document.getElementById('alertName')


var information = [];
if (localStorage.getItem("all") !== null) {
    information = JSON.parse(localStorage.getItem("all"))
    display()
}
// localStorage.clear("all")

function Add() {
    if (validationName()&&validationPrice() == true) {
        var person = {
            name: nameInput.value,
            age: ageInput.value,
            phone: phoneInput.value,
            track: nameTrack.value,
            addres: addresInput.value,
            email: emailInput.value,
            img: `./imgs/${imgInput.files[0]?.name}`,
        };
        // if (person.img == undefined) {
        //     person.img = "./imgs/1_New1.jpg"

        // }
        information.push(person);
        deleteForm();
        display();

        localStorage.setItem("all", JSON.stringify(information))
        console.log(information);
    }


}
function deleteForm() {
    nameInput.value = ""
    ageInput.value = ""
    phoneInput.value = ""
    trackInput.value = ""
    addresInput.value = ""
    emailInput.value = ""
    imgInput.value = ""
    // console.log("deleted");
}

function display(index) {
    cartona = ``
    for (let i = 0; i < information.length; i++) {
        cartona += `
            <tr>
            <td>${i + 1}</td>
            <td>${information[i].name}</td>
            <td>${information[i].age}</td>
            <td>${information[i].phone}</td>
            <td>${information[i].track}</td>
            <td>${information[i].addres}</td>
            <td>${information[i].email}</td>
            <td><img src="${information[i].img}" alt=""></td>
            <td ><button onclick="deletePerson(${i})" class="btn btn-outline-danger">Delete</button></td>
            <td><button  onclick="updateData(${i})" class="btn btn-outline-warning">Up</button></td>
        </tr>
            `
    }
    document.getElementById("demo").innerHTML = cartona;
}


function deletePerson(index) {
    information.splice(index, 1);

    display()
    localStorage.setItem("all", JSON.stringify(information))

}

function search() {
    var term = searchInput.value.toLowerCase()
    cartoona = ``
    for (let i = 0; i < information.length; i++) {
        if (information[i].name.toLowerCase().includes(term.toLowerCase()) == true) {

            cartoona += `
                <tr>
            <td>${i + 1}</td>
                <td>${information[i].name}</td>
                <td>${information[i].age}</td>
                <td>${information[i].phone}</td>
                <td>${information[i].track}</td>
                <td>${information[i].addres}</td>
                <td>${information[i].email}</td>
                <td><img src="${information[i].img}" alt=""></td>
                <td ><button onclick="deletePerson(${i})" class="btn btn-outline-danger">Delete</button></td>
                <td><button onclick="updateData(${i})" class="btn btn-outline-warning">Up</button></td>
            </tr>
                `
        }
    }
    document.getElementById("demo").innerHTML = cartoona
}


var updateIndex;
function updateData(x) {
    updateIndex = x
    add.classList.add('d-none')
    update.classList.remove('d-none')
    nameInput.value = information[x].name;
    ageInput.value = information[x].age;
    phoneInput.value = information[x].phone
    trackInput.value = information[x].track
    addresInput.value = information[x].addres
    emailInput.value = information[x].email
    console.log("updata");
}

function updateForm() {
    add.classList.remove('d-none')
    update.classList.add('d-none')
    information[updateIndex].name = nameInput.value;
    information[updateIndex].age = ageInput.value;
    information[updateIndex].phone = phoneInput.value
    information[updateIndex].track = trackInput.value
    information[updateIndex].addres = addresInput.value
    information[updateIndex].email = emailInput.value
    localStorage.setItem("all", JSON.stringify(information))

    display()
    deleteForm()
    console.log("done");
}




// function validation(element) {
//     // console.log(element.nextElementSibling);
//     var regex = {
//         nameInput: /^[a-z0-9_-]{3,15}$/,
//         nameAge: /^[1-8][0-8]$/,
//         namePhone: /^(020|\+2)?01[0125][0-9]{8}$/,
//         nameTrack: /^(frontend|backend|paython|java|ai|robot)$/gmi,
//         nameAddres: /[a-z]{5,}/gmi,
//         nameEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
//     }


//     if (regex[element.id].test(element.value) == true) {
//         element.classList.add('is-valid');
//         element.classList.remove('is-invalid');
//         element.nextElementSibling.classList.replace('d-block', 'd-none')

//         return true;

//     }
//     else {
//         element.classList.add('is-invalid');
//         element.classList.remove('is-valid');
//         element.nextElementSibling.classList.replace('d-none', 'd-block')
//         return false
//     }
// }


// var regexNameInput=/^[a-z0-9_-]{3,15}$/
// if(regexNameInput.test('mssi')){
//     console.log("match");
// }else{
//     alert("nomatch")
// }


function validationName() {
    var regexNameInput = /^[A-Z][a-z0-9_-]{3,25}$/
    if (regexNameInput.test(nameInput.value) == true) {
        alertName.classList.replace('d-block', 'd-none')

        nameInput.classList.add('is-valid')
        nameInput.classList.remove('is-invalid')

       
        return true
    }
    else {
        alertName.classList.replace('d-none', 'd-block')
        nameInput.classList.add('is-invalid')
        nameInput.classList.remove('is-valid')


        return false
    }
}
function validationPrice() {
    var regexAgeInput = /^[1-8][0-8]$/
    if (regexAgeInput.test(ageInput.value) == true) {
        document.getElementById('alertAge').classList.replace('d-block', 'd-none')
        ageInput.classList.add('is-valid')
        ageInput.classList.remove('is-invalid')

        return true
    } else {
        document.getElementById('alertAge').classList.replace('d-none', 'd-block')
        ageInput.classList.add('is-invalid')
        ageInput.classList.remove('is-valid')
    }

}
