

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var myDate = new Date(),
day = myDate.getDay();
console.log(days[day]);

document.getElementById("alertUser").innerHTML = "You we born on a " + (days[day]);

var dob = document.getElementById("date").value;

var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]


let akanFem;


function processData() {
    document.getElementById("submitInput").value;

}

function idGender() {
    document.getElementById("gender").value;

}

function resetform() {
    document.getElementById("form").reset();

}