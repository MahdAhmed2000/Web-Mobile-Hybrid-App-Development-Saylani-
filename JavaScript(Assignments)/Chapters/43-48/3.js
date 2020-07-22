function delet(a){
  var b;
  var c;
  var elements = document.getElementsByTagName("TR");
  for(var i = 1; i < elements.length; i++){
    if(elements[i].id === a){
      for(var j = (i+1); j < elements.length; j++){
        b = elements[j].firstChild.innerHTML;
        b = parseInt(b);
        b -= 1;
        elements[j].firstChild.innerHTML = b.toString();
      }
      break;
    }
  }
  document.getElementById(a).remove();
}
 