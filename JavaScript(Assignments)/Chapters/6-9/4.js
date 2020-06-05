var num = prompt("Enter your favorite number:", 5);
var string = "Table of " + num + " : ";
document.write(string.bold());
document.write("<br>");
for (var i = 1; i <= 10; i++) {
  document.write(num + " X " + i + " = " + (num*i) + "<br>");
}