var x = prompt("Enter a string: ");
var y = 0;
var w = 0;
var t = 0;
var s = 0;
for (var i = 0; i < x.length; i++) {
  g = parseFloat(x[i]);
  f = isNaN(g);
  if (f === false) {
    y += 1;
  }
  else {
    if(x[i] === x[i].toUpperCase()) {
      if(x[i] === " " || x[i] === "?" || x[i] === "#" || x[i] === "@" || x[i] === "!" || x[i] === ".") {
        s += 1;
      }
      else {
        w += 1;
      }
    }
    else {
       t += 1;
    }
  }
}
alert("Your String contains " + w + " Uppercase, " + t + " Lowercase Characters, " + y + " Numbers and " + s + " Other Characters");
