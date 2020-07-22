var string = prompt("Enter a string: ");
var character = prompt("Enter a character whose index you would like to know in your string: ");
alert(indices(string, character));
function indices(a, b){
  var ind;
  for(var i = 0; i < a.length; i++){
    if(a[i] === b){
      ind = i;
    }
  }
  return ind;
}