var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Enter an item that you want from our bakery: ");
item = item.toLowerCase();
var c = 0;
for (var i = 0; i < bakery.length; i++) {
  if(bakery[i] === item) {
    index = i;
    break;
  }
  else {
    c += 1;
  }
}
if(c === bakery.length) {
  alert("This item is not available in our bakery");
}
else {
  alert("This item is available at index " + index + " in our bakery");
}

  
