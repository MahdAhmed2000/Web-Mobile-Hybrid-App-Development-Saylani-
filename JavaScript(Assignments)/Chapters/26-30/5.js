var cointoss;
cointoss = Math.random();
cointoss *= 2;
cointoss = Math.ceil(cointoss);
var h;
if(cointoss == 1) {
  h = "Tails";
}
else {
  h = "Heads";
}
document.write(cointoss + "<br>");
document.write("random coin value: " + h);