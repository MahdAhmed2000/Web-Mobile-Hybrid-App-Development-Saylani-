var input = document.getElementById("textbox");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("twentyfirst").click();
  }
});

function myfunc(a) {
  var element = document.getElementById(a).innerHTML;
  document.getElementById("textbox").value += element;
}
function calcul() {
  var tarstring = document.getElementById("textbox").value;
  document.getElementById("textbox").value = eval(tarstring);
}
function cls() {
  document.getElementById("textbox").value = "";
}

