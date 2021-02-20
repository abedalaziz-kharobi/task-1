var students = [];
var i=1;
document.getElementById('submit').addEventListener('click', () => {
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gpaInputEl = document.getElementById('gpa');
	let event = 'fail';
	// Validation for input

	inputValidation(nameInputEl.value, idInputEl.value, gpaInputEl.value);


	// insert student

	// Show success message
	if(nameInputEl.value != "" && idInputEl.value != "" && gpaInputEl.value != "" ){
		event='success';
		insertStudent(nameInputEl.value, idInputEl.value, gpaInputEl.value);
		addtabe(i , nameInputEl.value, idInputEl.value, gpaInputEl.value);
		i=i+1;
	}
	
	showMessage(event);
	
});

function inputValidation(name, id, gpa) {
	// check for the value of each element
    let x = 30;


	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gpa == '') {
		alert('Please insert the student gpa');
	}
		
	
}

function insertStudent(name, id, gpa) {
	let student = {
		name: name,
		id: id,
		gpa: gpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["id"] = document.getElementById("idNumber").value;
    formData["gpa"] = document.getElementById("gpa").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(i);
	var cell1 = row.insertCell(0);
	cell1.innerHTML = i;
	var cell2 = row.insertCell(1);
	cell2.innerHTML = data.name;
	var cell3 = row.insertCell(2);
	cell3.innerHTML = data.id;
	var cell4 = row.insertCell(3);
	cell4.innerHTML = data.gpa;	
	var cell5 = row.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
					   <a onClick="onDelete(this)">Delete</a>`;
		i=i+1;
					   
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("idNumber").value = "";
    document.getElementById("gpa").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("idNumber").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gpa").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.id;
    selectedRow.cells[3].innerHTML = formData.gpa;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("myTable").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}

function addtabe(i , name , id , gpa ) {
	var table = document.getElementById("myTable");
	var row = table.insertRow(table.length);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	cell1.innerHTML = i;
	cell2.innerHTML = name;
	cell3.innerHTML = id;
	cell4.innerHTML = gpa;
	cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

/*
// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.
*/