var cities = new Array();
var x = prompt("How many cities do you have?:");
x = parseInt(x);
for (var i = 0; i < x; i++) {
  cities[i] = prompt("Enter city: " + (i+1));
}
var a = cities.length - 2;
var y = prompt("Type an index from which you want select any of your three favourite cities from the list: (Your asnwer should be less than " + a + ")");
y = parseInt(y);
citiesslice = cities.slice(y, y+3);
document.write("Cities List: ".bold() + "<br>" + cities);
document.write("<br>");
document.write("Selected Cities List: ".bold() + "<br>" + citiesslice);
