var dist = prompt("Enter the distance between Lahore and Karachi: ");
dist = parseFloat(dist);
alert("Your distance in meters, feet, inches and cm is :" + meters(dist) + "m, " + feet(dist) + "ft., " + inches(dist) + "inch, " + centi(dist) + "cm." + " respectively");





function meters(a){
  a *= 1000;
  return a;
}
function feet(a){
  a *= 3280.84;
  return a;
}
function inches(a){
  a *= (3280.84*12);
  return a;
}
function centi(a){
  a *= (100000);
  return a;
}