var first = prompt("Enter your first no.");
var sign = prompt("Enter the sign of your desired arithmetic operation");
var second = prompt("Enter your second no.");
first = parseFloat(first);
second = parseFloat(second);
var result;
if (sign === "+") {
  result = first + second;
}
else if (sign === "-") {
  result = first - second;
}
else if (sign === "*") {
  result = first * second;
}
else if (sign === "/") {
  result = first / second;
}
else if (sign === "%") {
  result = (first / second) * 100;
}
else if (sign === "rem") {
  result = first % second;
}
if (sign === "%") {
  alert("Your answer is: " + result + "%");
}
else {
  alert("Your answer is: " + result);
}
