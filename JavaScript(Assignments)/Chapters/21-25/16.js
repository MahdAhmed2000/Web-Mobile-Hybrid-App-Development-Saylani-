var string1 = "University Of Karachi";
var arr1 = string1.split(" ");
for(var i = 0; i < arr1.length; i++) {
  var arr2 = arr1[i].split("");
  for(var j = 0; j < arr2.length; j++){
    document.write(arr2[j]);
    document.write("<br>");
  }
  document.write("<br>");
}

