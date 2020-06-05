var names = new Array();
names.push([0, 1, 2, 3]);
names.push([1, 0, 1, 2]);
names.push([2, 1, 0, 1]);
document.write("Your desired Matrix:".bold() + "<br>");
for (var i = 0; i < names.length; i++) {
  document.write(names[i] + "<br>");
}
