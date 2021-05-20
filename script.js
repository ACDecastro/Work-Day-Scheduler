$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, Do MMM YYYY"));
});

const hour9 = document.getElementById("0900");
const hour10 = document.getElementById("1000");
const hour11 = document.getElementById("1100");
const hour12 = document.getElementById("1200");
const hour13 = document.getElementById("1300");
const hour14 = document.getElementById("1400");
const hour15 = document.getElementById("1500");
const hour16 = document.getElementById("1600");
const hour17 = document.getElementById("1700");

const timeArray = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

function setTimes(){
    const timeNow = moment().hour();
    console.log("timeNow: "+timeNow);
    timeArray.forEach(element => {
        console.log("time block: " + element.id);
        const compareTime = parseInt((element.id)[0]+(element.id)[1]);
        console.log("compareTime: "+compareTime);
        if(compareTime<timeNow){
            element.classList.add("past");
            element.classList.remove("present");
            element.classList.remove("future");
        }
        else if(compareTime==timeNow){
            element.classList.add("present");
            element.classList.remove("past");
            element.classList.remove("future");
        }
        else{
            element.classList.add("future");
            element.classList.remove("past");
            element.classList.remove("present");
        }


    })
}
setTimes();
//setInterval("window.location.reload()", 60000);