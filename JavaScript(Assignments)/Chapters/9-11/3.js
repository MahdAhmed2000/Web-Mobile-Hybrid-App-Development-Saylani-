var x = prompt("Enter the color of a traffic signal light: ");
x = x.toLowerCase();
if (x === "red") {
  alert("Must Stop!");
}
else if (x === "yellow") {
  alert("Be Ready To Move!");
}
else if (x ==="green") {
  alert("Move now!");
}
else {
  alert("Wrong colour entered!");
}