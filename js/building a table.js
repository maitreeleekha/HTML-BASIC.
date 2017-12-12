function buildTable()
{

    var firstName = document.querySelector("#fname").value;
    var lastName = document.querySelector("#lname").value;
    addLineToHTMLTable(firstName , lastName);
    document.querySelector("#fname").value="";
    document.querySelector("#lname").value="";
}

function addLineToHTMLTable(firstName , lastName){

var tbody = document.body.querySelector("#tbody");
var newRow = tbody.insertRow();

var firstNameCell = newRow.insertCell();
firstNameCell.innerHTML= firstName;

var lastNameCell = newRow.insertCell();
lastNameCell.innerHTML = lastName;

console.log("new row inserted!: " + lastNameCell.innerHTML + " " + firstNameCell.innerHTML);
}