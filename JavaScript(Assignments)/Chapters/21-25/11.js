var word = prompt("Enter a word here: ");
document.write("User Input: " + word + "<br>");
var firstSlice = word.charAt(0);
var secondSlice = word.slice(1, word.length);
firstSlice = firstSlice.toUpperCase();
secondSlice = secondSlice.toLowerCase();
var newword = firstSlice.concat(secondSlice);
document.write("Title Case: " + newword);
