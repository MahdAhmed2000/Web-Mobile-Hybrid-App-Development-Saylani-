var string = prompt("Enter a string: ");
string = string.toLowerCase();
alert("Maximum " + maxvowel(string) + " Consecutive vowel occurences in your string");

function maxvowel(string){
  var h = 0;
  var max = 0;
  var vowel = true;
  for(var i = 0; i < string.length; i++){
    switch(string[i]){
      case "a":
        h += 1;
        break;
      case "e":
        h += 1;
        break;
      case "i":
        h += 1;
        break;
      case "o":
        h += 1;
        break;
      case "u":
        h += 1;
        break;
      default:
        vowel = false;
    }
    if((vowel === false) || (i === (string.length - 1))){
      vowel = true;
      if(h > max){
        max = h;
      }
      h = 0;
    }
  }
  return max;
}
    
      
      
