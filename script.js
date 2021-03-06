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
    timeArray.forEach(element => {
        const compareTime = parseInt((element.id)[0]+(element.id)[1]);

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
setInterval("window.location.reload()", 60000);

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, task); 
});

for (let i = 900; i <= 1700 ; i = i+100) {
    let taskID = i.toString();
    if(i==900){
        taskID = "0900";
    }
    let taskValue = localStorage.getItem(taskID);
    let input = $("#" + taskID).find("textarea")
    input.val(taskValue);
}