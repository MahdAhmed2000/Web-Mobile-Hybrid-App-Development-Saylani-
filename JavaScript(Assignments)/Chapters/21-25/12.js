var num = 35.36;
document.write("Number: " + num + "<br>");
num = num.toString();
var start = num.indexOf(".");
var firstSlice = num.slice(0, start);
var secondSlice = num.slice((start + 1), num.length);
num = firstSlice.concat(secondSlice);
document.write("Result: " + num);
