var temp = prompt("Enter the temperature in your city in Centigrades or Celsius:");
if (temp > 40) {
  alert("It's too hot outside!");
}
else if (temp > 30) {
  alert("The weather Today is Normal!");
}
else if (temp > 20) {
  alert("Today's Weather is Cool!");
}
else if (temp > 10) {
  alert("OMG!, Today's Weather is so Cool!");
} 
else {
  alert("It's Freezing Outside!");
}