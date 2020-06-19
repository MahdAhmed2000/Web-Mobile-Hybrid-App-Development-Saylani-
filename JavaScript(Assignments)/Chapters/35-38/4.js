function calc(x, w, y){
  if(w === "+") {
    return x + y;
  }
  else if(w === "-") {
    return x - y;
  }
  else if(w === "/") {
    return x / y;
  }
  else if(w === "*") {
    return x * y;
  }
  else {
    return "error, wrong operator entered";
  }
}
var num1 = prompt("Enter your first number: ");
var op = prompt("Enter your operator: ");
var num3 = prompt("Enter your second number: ");
num1 = parseInt(num1);
num3 = parseInt(num3);
document.write("Result: " + calc(num1, op, num3));