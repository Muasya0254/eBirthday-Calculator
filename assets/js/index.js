
function birthDayAlert() {
var myform = document.forms.akanNameForm;
var message = document.getElementById("error");
var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"] //Male Akan Names
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] //female Akan Names
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //day of week by name
var birthday = document.getElementById = ("userBirthday").value; //get date from form
var dateOfBirth = new Date (birthday); // use date from form
var dayOfweek = dateOfBirth.getDay(); //day of week in number
var usergender = document.getElementsByClassName = ("gender"); //call gender





}

////////

    function resetform() {
    document.getElementById("form").reset();
}