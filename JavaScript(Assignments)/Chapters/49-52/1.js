function welcome(){
  var values = [];
  var labels = [];
  for(var i = 1; i < 8; i++){
    i = i.toString();
    values.push(document.getElementById(i).value);
    i = parseInt(i);
  }
  for(var i = 9; i < 16; i++){
    i = i.toString();
    labels.push(document.getElementById(i).innerHTML);
    i = parseInt(i);
  }
  var a = document.body.childNodes;
  for(var i = 0; i < a.length; i++){
    a[i].remove();
  }
  var div;
  for(var i = 0; i < values.length; i++){
    div = document.createElement("DIV");
    div.innerHTML = labels[i] + " : " + values[i];                   
    document.body.appendChild(div);
  }
}

