while (true) {
  var x = prompt("Enter a single character (of length 1): ");
  if (x.length === 1) {
  break;
  }
}
if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
  alert("true");
}
else {
  alert("false");
}