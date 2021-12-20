// display current time in DOM
var mnt = moment().format('MMM Do YYYY');
var showtime = $('#currentDay');
showtime.text(mnt);
console.log(mnt);
