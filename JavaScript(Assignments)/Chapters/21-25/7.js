var city = "Hyderabad";
document.write("City: " + city + "<br>");
var replace = "Islam";
var replaced = "";
var start = city.indexOf("H");
var end = city.indexOf("r");
for(var i = start; i <= end; i++) {
  replaced += city[i]
}
document.write("After replacement: " + city.replace(replaced, replace));