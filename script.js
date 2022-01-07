var today = moment();
$("#1a").text(today.format('LLLL'));

var currentTime = moment('{inclusiondDate}', 'LTS');

var block9am = "9:00:00 am";
var block10am = "10:00:00 am";
var block11am = "11:00:00 am";
var block12pm = "12:00:00 pm";
var block1pm = "1:00:00 pm";
var block2pm = "2:00:00 pm";
var block3pm = "3:00:00 pm";
var block4pm = "4:00:00 pm";
var block5pm = "5:00:00 pm";


var Hour9am = document.querySelector("#9am");
var Hour10am = document.querySelector("#10am");
var Hour11am = document.querySelector("#11am");
var Hour12pm = document.querySelector("#12pm");
var Hour1pm = document.querySelector("#1pm");
var Hour2pm = document.querySelector("#2pm");
var Hour3pm = document.querySelector("#3pm");
var Hour4pm = document.querySelector("#4pm");
var Hour5pm = document.querySelector("#5pm");

if(currentTime.isBetween(block9am, block10am)) {
    Hour9am.setAttribute ("style", "present"); }
    else if(currentTime.isBefore(block9am))
        Hour9am.setAttribute ("style", "future");
        else {
            Hour9am.setAttribute("style", "past");
        }

if(currentTime.isBetween(block10am, block11am)) {
    Hour10am.setAttribute ("style", "present"); }
    else if(currentTime.isBefore(block11am))
        Hour10am.setAttribute ("style", "future");
        else {
            Hour10am.setAttribute("style", "past");
        }

if(currentTime.isBetween(block11am, block12pm)) {
    Hour11am.setAttribute ("style", "present"); }
    else if(currentTime.isBefore(block12pm))
        Hour11am.setAttribute ("style", "future");
        else {
            Hour11am.setAttribute("style", "past");
        }


if(currentTime.isBetween(block12pm, block1pm)) {
    Hour12pm.setAttribute ("style", "present"); }
    else if(currentTime.isBefore(block1pm))
        Hour12pm.setAttribute ("style", "future");
        else {
            Hour12pm.setAttribute("style", "past");
        }
