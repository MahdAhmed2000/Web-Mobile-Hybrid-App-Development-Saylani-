function search(a, b) {
  var count = 0;
  for(var i = 0; i < a.length; i++) {
    if(a[i] === b) {
      count += 1;
    }
  }
  return count;
}
var word = prompt("Enter your string: ");
var letter = prompt("Enter the letter you want to search in the string: ");
word = word.toLowerCase();
letter = letter.toLowerCase();
document.write("Your Letter occurs " + search(word, letter) + " time(s) in your String");
  