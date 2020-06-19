function upsidedown(start, end) {
  for(var i = start; i <= end; i++) {
    document.write(i + "<br>" + "<br>");
  }
}
var start = prompt("Enter the starting point of your counting: ");
var end = prompt("Enter the end point of your counting: ");
upsidedown(start, end);
