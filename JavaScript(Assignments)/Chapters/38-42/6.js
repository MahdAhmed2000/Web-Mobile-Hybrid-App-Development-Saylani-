var sentence = prompt("Enter a string: (not more than 25 characters long)");
for(var i = 0; i < sentence.length; i++){
  switch(sentence[i]) {
    case "a":
      sentence = sentence.replace(sentence[i], "");
      break;
    case "e":
      sentence = sentence.replace(sentence[i], "");
      break;
    case "i":
      sentence = sentence.replace(sentence[i], "");
      break;
    case "o":
      sentence = sentence.replace(sentence[i], "");
      break;
    case "u":
      sentence = sentence.replace(sentence[i], "");
      break;
  } 
}
alert(sentence);