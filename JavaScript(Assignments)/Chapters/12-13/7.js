while (true) {
  var time = prompt("What time is it now?(Enter in 24-hour four-digit format, like 1300 or so)");
  if (time.length === 4) {
    break;
  }
}
if (time >= 0 && time < 1200) {
  alert("Good Morning, User!");
} 
else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon, User!");
}
else if (time >= 1700 && time < 2100) {
  alert("Good Evening, User!");
}
else {
  alert("Good Night, User!");
}
