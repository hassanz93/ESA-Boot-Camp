// function setBackImg(e) {
//     let myUrl = "url(" + URL.createObjectURL(e.target.files[0]) + ")";
//     document.body.style.backgroundImage = myUrl;
//     // document.getElementById('home').style.backgroundImage = myUrl;
//     // document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg)";
// }

// document.getElementById('img_file').addEventListener("change", setBackImg);

let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let avg = document.getElementById('average');
let addStudent = document.getElementById('add_student');
let divDetails = document.getElementById('details');
let avgStudent = document.getElementById('avg_student');
let avg_array = [];
let total = counter = 0;

function add_new_student() {
    if (firstName.value && lastName.value && avg.value) {
        let data = `<div class="alert alert-danger">
    ${firstName.value} ${lastName.value} <span class="avgValue">${avg.value}</span>
  </div>`;
        divDetails.innerHTML += data;
        //first method
        // avg_array.push(avg.value);
        //second method
        // total += Number(avg.value);
        // counter++;
    }
}
//third method
// function get_avg_students() {
//     let theAvg = total / counter;
//     let data = `<div class="alert alert-info">
//     the average of class is: ${theAvg}
//   </div>`;
//     divDetails.innerHTML += data;
// }
function get_avg_students() {

    document.querySelectorAll('.avgValue').forEach(e => {
        total += Number(e.textContent);
        counter++;
    });
    let theAvg = total / counter;
    let data = `<div class="alert alert-info">
    Total: ${total}<br>Average of class: ${theAvg}
    </div>`;
    divDetails.innerHTML += data;
}
addStudent.addEventListener("click", add_new_student);
avgStudent.addEventListener("click", get_avg_students);