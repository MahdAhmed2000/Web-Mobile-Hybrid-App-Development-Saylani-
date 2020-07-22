function one(){
  var element = document.getElementById("main-content");
  alert(element);
}
function two(){
  var array = document.getElementById("main-content").children;
  for(var i = 0; i < array.length; i++){
    if(array[i].nodeType === 1){
      document.write(array[i] + "<br>");
    }
  }
}
function three(){
  var str = "";
  var array = document.getElementsByClassName("render");
  for(var i = 0; i < array.length; i++){
    str += array[i].innerHTML + "<br>";
  }
  document.write(str);
}
function four(){
  var name = prompt("Enter your first name: ");
  document.getElementById("first-name").value = name;
}
function five(){
  var name1 = prompt("Enter your first name: ");
  document.getElementById("first-name").value = name1;
  var name2 = prompt("Enter your last name: ");
  document.getElementById("last-name").value = name2;
  var email = prompt("Enter your E-mail: ");
  document.getElementById("email").value = email;
}