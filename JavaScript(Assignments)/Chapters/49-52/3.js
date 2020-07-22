var y = 0;
var deleted = false;
function Submit(){
  if(deleted === true){
    y = y - 1;
  } 
  var table = document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
  var array = [];
  var element;
  for(var i = 1; i < 4; i++){
    i = i.toString();
    element = document.getElementById(i);
    i = parseInt(i);
    array.push(element.value);
  }
  var row1 = table.insertRow(y);
  row1.id = y.toString() + "abcd";
  var newCell1 = row1.insertCell(0);
  newCell1.innerHTML = array[0];
  var newCell2 = row1.insertCell(1);
  newCell2.innerHTML = array[1];
  var newCell3 = row1.insertCell(2);
  newCell3.innerHTML = array[2];
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Delete";
  btn.className = "btn btn-danger";
  btn.onclick = function(){document.getElementById(row1.id).remove(); deleted=true;};
  var newCell4 = row1.insertCell(3);
  newCell4.appendChild(btn);
  var btn2 = document.createElement("BUTTON");
  btn2.innerHTML = "Edit";
  btn2.className = "btn btn-warning";
  btn2.onclick = function(){newCell1.contentEditable=(!(newCell1.isContentEditable)); newCell2.contentEditable=(!(newCell2.isContentEditable)); newCell3.contentEditable=(!(newCell3.isContentEditable));};
  var newCell5 = row1.insertCell(4);
  newCell5.appendChild(btn2);
  y += 1;
}
  