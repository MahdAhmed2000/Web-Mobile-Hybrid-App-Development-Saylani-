document.write("Counting:".bold() + "<br>");
document.write("<br>");
for (var i = 1; i < 16; i++) {
  document.write(i + " , ");
}
document.write("<br>");
document.write("<br>");
document.write("Reverse counting:".bold() + "<br>");
document.write("<br>");
for (var i = 10; i > 0; i--) {
  document.write(i + " , ");
}
document.write("<br>");
document.write("<br>");
document.write("Even counting:".bold() + "<br>");
document.write("<br>");
for (var i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    document.write(i + " , ");
  }
}
document.write("<br>");
document.write("<br>");
document.write("Odd counting:".bold() + "<br>");
document.write("<br>");
for (var i = 0; i < 21; i++) {
  if (i % 2 !== 0) {
    document.write(i + " , ");
  }
}
document.write("<br>");
document.write("<br>");
document.write("Series:".bold() + "<br>");
document.write("<br>");
for (var i = 2; i < 21; i++) {
  if (i % 2 === 0) {
    document.write(i + "k" + " , ");
  }
}
document.write("<br>");
document.write("<br>");