document.write("Multiples of 5: ".bold() + "<br>" + "<br>");
for (var i = 1; i < 101; i++) {
  if (i % 5 === 0) {
    document.write(i + " , ");
  }
}