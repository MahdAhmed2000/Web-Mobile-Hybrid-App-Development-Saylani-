var weight = prompt("Enter your weight:");
var index = weight.indexOf(".");
var g;
var w;
var lastpart = "";
var firstpart;
var c = 0;
var m = 0;
var n = 0;
if (index === -1) {
  for(var i = 0; i < weight.length; i++) {
    g = isNaN(Number(weight[i]));
    if (g === false) {
      c += 1;
    } 
    else {
      break;
    }
  }
  var newstring = weight.slice(0, c);
  document.write("Your weight is " + newstring + " kilograms");
}
else {
  for(var i = 0; i < weight.length; i++) {
    g = isNaN(Number(weight[i]));
    if(g === false) {
      m += 1;
    }
    else {
      break;
    }
  }
  for(var i = (m+1); i < weight.length; i++) {
    w = isNaN(Number(weight[i]));
    if(w === true) {
      break;
    }
    else {
      n += 1;
    }
  }
  var newstring = weight.slice(0, m) + "." + weight.slice(m+1, (m+n+1));
  document.write("Your weight is " + newstring + " kilograms");
}

