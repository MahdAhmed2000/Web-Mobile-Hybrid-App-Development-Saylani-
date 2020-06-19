var x = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (x.getDay() === 0 || x.getDay() === 6) {
  document.write("It's a Fun day!");
}
else {
  document.write("It's a Working day!");
}