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
    
    
          var myDate = new Date(),
        day = myDate.getDay();
        

        document.getElementById("dayOfBirth").innerHTML = "You we born on a " + (daysOfTheWeek[day]);

        document.getElementById("akanName").innerHTML = "You Akan Name is " + (days[day]);


}