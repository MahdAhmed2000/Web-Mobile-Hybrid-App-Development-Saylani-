var colors = ["red", "yellow", "blue", "green"];
document.write("Initial Array:".bold() + "<br>");
document.write(colors + "<br>");
var x = prompt("What color do you want to add at the beginning of the array?");
colors.unshift(x);
document.write("After adding: ".bold() + x.bold()+ " at the beginning".bold() + "<br>");
document.write(colors + "<br>");
var y = prompt("What color do you want to add to the end of the array?");
colors.push(y)
document.write("After adding: ".bold() + y.bold() + " at the end".bold() + "<br>");
document.write(colors + "<br>");
colors.unshift("crimson");
colors.unshift("turquouise");
document.write("After adding turquouise and crimson to the beginning:".bold() + "<br>");
document.write(colors + "<br>");
colors.shift();
document.write("After deleting the first element of the array:".bold() + "<br>");
document.write(colors + "<br>");
colors.pop();
document.write("After deleting the last element of the array:".bold() + "<br>");
document.write(colors + "<br>");
var descolor = prompt("Which color do you further want to add at any position?:");
var position = prompt("At which position do you want to add " + descolor + " in the array? (Enter position not index!)");
position -= 1;
colors.splice(position, 0, descolor);
var disstring = "Afer adding " + descolor + " at " + position + " index of the colors array";
document.write(disstring.bold() + "<br>");
document.write(colors + "<br>");
var delposition = prompt("From what position do you want to delete some colours? (Enter Index Please:)");
var many = prompt("How many colours do you want to delete from index " + delposition + "?");
colors.splice(delposition, many);
var dis2string = "Afer deleting " + many + " colours starting from  " + delposition + " index of the colors array";
document.write(dis2string.bold() + "<br>");
document.write(colors);
