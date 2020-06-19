var number = 0;
while (number >= 0) {
  number = prompt("Enter a correct negative float: ");
}
document.write("Number: " + number + "<br>");
document.write("round off value: " + Math.round(number) + "<br>");
document.write("ceil value: " + Math.ceil(number) + "<br>");
document.write("floor value: " + Math.floor(number));


