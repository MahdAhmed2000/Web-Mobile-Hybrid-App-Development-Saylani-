var devices = [];
var x = prompt("How many computer devices do you have?:");
x = parseInt(x);
for (var i = 0; i < x; i++) {
  devices[i] = prompt("Enter your computer device: " + (i+1));
}
document.write("Computer Devices: " + "<br>" + devices + "<br>" + "<br>");
for (var i = 0; i < x; i++) {
  document.write("Out: " + (i+1) + "<br>");
  document.write(devices.pop() + "<br>");
}