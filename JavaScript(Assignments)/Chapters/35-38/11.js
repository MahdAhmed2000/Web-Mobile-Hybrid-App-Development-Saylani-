function Capitalize(sentence) {
  var arr1 = sentence.split(" ");
  var length = arr1.length;
  var stri;
  var y;
  for(var i = 0; i < length; i++) {
    stri = arr1.shift();
    y = stri.charAt(0);
    y = y.toUpperCase();
    for (var j = 1; j < stri.length; j++) {
      y += stri[j];
    }
    document.write(y + " ");
  }
}
var sentence = prompt("Enter an English sentence: ");
Capitalize(sentence);