var valueOfDice;
for(var i = 0; i < 2; i++) {
  valueOfDice = Math.random();
  valueOfDice *= 6;
  valueOfDice = Math.floor(valueOfDice);
  document.write("Random Dice Value: " + valueOfDice + "<br>");
}

