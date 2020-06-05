var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var x = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
var r = 0;
var v;
for (var i = 0; i < bakery.length; i++) {
  if (x === bakery[i]) {
    r = 3;
    v = i;
    break;
  }
}
if (r === 0) {
  alert("We are sorry!.... " + x + " is not available" + " in our bakery");
}  
else {
  alert(x + " is available " + "at " + "index " + v + " in our bakery");
}