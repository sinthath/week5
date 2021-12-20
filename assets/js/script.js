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

$(document).ready(function() {
    timeTrack();
});