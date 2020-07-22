var x;
document.body.style.fontSize = "1.0em";
function zooin(){
  var y = "";
  x = document.body.style.fontSize;
  var index;
  for(var i = 0; i < x.length; i++){
    if(x[i] === "e"){
      index = i;
      break;
    }
  }
  for(var i = 0; i < index; i++){
    y += x[i];
  }
  y = parseFloat(y);
  y += 0.1;
  y = y.toString();
  document.body.style.fontSize = y + "em";
}
function zooout(){
  var y = "";
  x = document.body.style.fontSize;
  var index;
  for(var i = 0; i < x.length; i++){
    if(x[i] === "e"){
      index = i;
      break;
    }
  }
  for(var i = 0; i < index; i++){
    y += x[i];
  }
  y = parseFloat(y);
  y -= 0.1;
  y = y.toString();
  document.body.style.fontSize = y + "em";
}
