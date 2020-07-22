function one(){
  document.write("The node type of element having id 'form-content' is: " + document.getElementById("form-content").nodeType)
}
function two(){
  document.write("The node type of element having id 'form-content' is: " + document.getElementById("form-content").nodeType + "<br>" + "The node type of the child of the element having id 'last-name' is: " + document.getElementById("form-content").firstChild.nodeType);
}
function three(){
  var textnode = document.createTextNode("Coffee");
  var node = document.getElementById("main-content");
  node.replaceChild(textnode, node.childNodes[0]);
}
function four(){
  alert(document.getElementById("main-content").firstChild.nodeName, document.getElementById("main-content").lastChild.nodeName);
}
function five(){
  alert(document.getElementById("last-name").nextSibling.nodeName, document.getElementById("last-name").previousSibling.nodeName);
}
function six(){
  alert("E-mail's parent node: " + document.getElementById("email").parentElement.nodeName);
  alert("Nodetype of email: " + document.getElementById("email").nodeType);
}