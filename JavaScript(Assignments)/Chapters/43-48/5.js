function Inc(){
  var element = document.getElementById("counternew");
  var a = parseInt(element.innerHTML);
  a += 1;
  element.innerHTML = a.toString();
}
function Dec(){
  var element = document.getElementById("counternew");
  var a = parseInt(element.innerHTML);
  a -= 1;
  element.innerHTML = a.toString();
}