function factorial(x) {
  var y = 1;
  for(var i = x; i > 1; i--) {
    y = y * i;
  }
  return y;
}
var num = prompt("Enter a number whose factorial you want?: ('A non-negative number:' )");
num = parseInt(num);
document.write("The Factorial of your number, " +  num + " :" + factorial(num));