var iny = "The quick brown fox jumps over the lazy dog";
var replacediny = iny.replace("The", "the");
var c = 0;
for(var i = 0; i < replacediny.length; i++) {
  if(replacediny.slice(i, i+3) === "the") {
    c += 1;
  }
}
document.write("Text: " + iny + "<br>");
document.write("There are " + c + " occurence(s) of the word 'the'");

