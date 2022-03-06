
        

function birthDayAlert() {
var myform = document.forms.akanNameForm;
var message = document.getElementById("error");
var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"] //Male Akan Names
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] //female Akan Names
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //day of week by name
var birthday = document.getElementById = ("userBirthday").value; //get date from form
var dateOfBirth = new Date (birthday); // use date from form
var dayNumber = dateOfBirth.getDay(); //day of week in number
var userGender = document.getElementsByClassName = ("gender"); //call gender


/// if conditions
if (birthday === "") //strict equality operator
{
    document.getElementById('AkanName').innerHTML;
}
else {
        for (var i=0;i<userGender.length;i++)
        { //loop
        if(userGender[i].checked)
        {
                if(userGender[i].value === "userFemale")
                    {
                    document.getElementById('alertUser').innerHTML = "You were born on a " + daysOfTheWeek[dayNumber] + "your Akan Name is " + akanFemaleNames[dayNumber];
                    }
                 else{
                        document.getElementById('alertUser').innerHTML = "You were born on a " + daysOfTheWeek[dayNumber] + "your Akan Name is " + akanMaleNames[dayNumber] ;
                     }
                    }
                else if(userGender[0].checked==false && userGender[1].checked==false ) {
                    document.getElementById('message').innerHTML ="You must select male or female";
                        return false;
        }
        function resetform() {
            document.getElementById("form").innerHTML = "";
        }
    }
   
    function createDate (year, month, _date) {
        var d = new Date(year, month, _date);
        if (d.getFullYear() != year 
          || d.getMonth() != month
          || d.getDate() != _date) {
          throw "invalid date";
        }
        return d;
      }