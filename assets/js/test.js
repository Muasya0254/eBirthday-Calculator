

var myform = document.forms.akanNameForm;
var message = document.getElementById("error");
var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let userInput = []
const bdayinput =document.getElementById("dobInput")
const sminput =document.getElementById("submitInput")

let inputbutton = document.getElementById("submitInput")
inputbutton.addEventListener("click", function(){
console.log("Button Clicked")
})


myform.onsubmit =function(){

    if(myform.akanNameForm.value == ""){
        message.innerHTML = "Please fiil in Date";
        return false;
    } else{
        message.innerHTML ="";
        return true;
    }
};

function birthDayAlert(){
    
    
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var myDate = new Date(),
        day = myDate.getDay();
        

        document.getElementById("dayOfBirth").innerHTML = "You we born on a " + (days[day]);
        document.getElementById("akanName").innerHTML = "You Akan Name is " + (days[day]);


}







































function birthDayAlert(){
    new Date("January 01, 1900");
    document.getElementById("dayOfBirth").innerHTML = "You we born on a " + new Date("January 01, 1900");
}

function dateOfBirth() {
    const x = document.getElementById("dOfBirth");
    x.value = x.value.dateOfBirth()
}
    var myBirthday = new Date("January 01, 1900");
    var dayz = dateOfBirth.getDay();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var myDate = new Date(),
day = myDate.getDay();

document.getElementById("dayOfBirth").innerHTML = "You we born on a " + (days[day]);
/////////
var dateOfBirth = new Date("January 01, 1900");
var dayz = dateOfBirth.getDay();

Document.write(getDayNameFromDayNo(dayz));

function getDayNameFromDayNo(dayNumber){
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[dayNumber];
}

console.log(dayNames[dayNumber])
///////

var dob = document.getElementById("date").value;

var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

document.getElementById("akanName").innerHTML = "Your AKan Name";

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

document.getElementById("alertUser").innerHTML = x;
