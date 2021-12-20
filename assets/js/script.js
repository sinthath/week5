// variables
var entryText;
var entryTime;

// display current time in DOM
var mnt = moment().format('MMM Do YYYY');
var showtime = $('#currentDay');
showtime.text(mnt);
console.log(mnt);

// checks each time block to determine time lapse and apply applicable styling to element id
function timeTrack () {
    var time = moment().hours();

    $(".input").each(function() {
        var timeSelect = parseInt($(this).attr("id"));

        if (time > timeSelect) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }else if (time < timeSelect) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }else {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
    });
}


// capture time block entry and add to local storage
$(".saveBtn").click(function () { 
    entryText = $(this).siblings(".input").val();
    console.log(entryText);
    entryTime = $(this).siblings(".hour").text();
    console.log(entryTime);
    localStorage.setItem(entryTime, JSON.stringify(entryText));    

    showEntry();
});

// persist time block entry
function showEntry () {

    var savedEntry8AM = JSON.parse(localStorage.getItem("8 AM"));
    $("#8").val("");
    $("#8").val(savedEntry8AM);
    var savedEntry9AM = JSON.parse(localStorage.getItem("9 AM"));
    $("#9").val("");
    $("#9").val(savedEntry9AM);
    var savedEntry10AM = JSON.parse(localStorage.getItem("10 AM"));
    $("#10").val("");
    $("#10").val(savedEntry10AM);
    var savedEntry11AM = JSON.parse(localStorage.getItem("11 AM"));
    $("#11").val("");
    $("#11").val(savedEntry11AM);
    var savedEntry12PM = JSON.parse(localStorage.getItem("12 PM"));
    $("#12").val("");
    $("#12").val(savedEntry12PM);
    var savedEntry1PM = JSON.parse(localStorage.getItem("1 PM"));
    $("#13").val("");
    $("#13").val(savedEntry1PM);
    var savedEntry2PM = JSON.parse(localStorage.getItem("2 PM"));
    $("#14").val("");
    $("#14").val(savedEntry2PM);
    var savedEntry3PM = JSON.parse(localStorage.getItem("3 PM"));
    $("#15").val("");
    $("#15").val(savedEntry3PM);
    var savedEntry4PM = JSON.parse(localStorage.getItem("4 PM"));
    $("#16").val("");
    $("#16").val(savedEntry4PM);
    var savedEntry5PM = JSON.parse(localStorage.getItem("5 PM"));
    $("#17").val("");
    $("#17").val(savedEntry5PM);
}

// execute functions in DOM
$(document).ready(function() {
    timeTrack();
    showEntry();
});
