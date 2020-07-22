function area(l1, l2, l3){
  var f = 1;
  var s = ((l1 + l2 + l3)/2);
  f = f * s;
  f = f * (s - l1);
  f = f * (s - l2);
  f = f * (s - l3);
  f = Math.sqrt(f);
  return f;
}
var x = prompt("Enter the length of your triangle's first side: ");
var y = prompt("Enter the length of your triangle's second side: ");
var z = prompt("Enter the length of your triangle's third side: ");
x = parseFloat(x);
y = parseFloat(y);
z = parseFloat(z);
alert("The area of your triangle is: " + area(x, y, z));
