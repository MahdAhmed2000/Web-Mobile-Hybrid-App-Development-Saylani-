var arr = ["This ", " is ", " my ", " cat"];
document.write("Array: ".bold() + "<br>" + arr);
var energy = "";
for (var i = 0; i < arr.length; i++) {
  energy += arr[i];
}
document.write("<br>");
document.write("<br>");
document.write("String: ".bold() + "<br>" + energy.bold());