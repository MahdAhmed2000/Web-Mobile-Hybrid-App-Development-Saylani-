function Maximize(sentence) {
  var max = 0;
  var maxstri;
  var arr1 = sentence.split(" ");
  var length = arr1.length;
  var stri;
  for(var i = 0; i < length; i++) {
    stri = arr1.shift();
    if (stri.length > max) {
      maxstri = stri;
      max = stri.length;
    }
  }
  return maxstri;
}
var sentence = prompt("Enter an English sentence: ");
document.write("The longest string in your sentence is: " + Maximize(sentence));
