var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i].bold() + "<br>");
}
document.write("<br>");
document.write("<br>");
var v;
for (var i = 0; i < fruits.length; i++) {
  v = "Element at index " + i + " is: " + fruits[i] + "<br>";
  document.write(v.bold());
}
