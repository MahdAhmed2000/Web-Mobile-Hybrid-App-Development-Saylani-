var year = prompt("Enter any year: ");
if (leap(year) === true) {
  alert("The year is a leap year!");
}
else {
  alert("The year is not a leap year!");
}










function leap(year){
  var x = year % 4 === 0;
  return x;
}