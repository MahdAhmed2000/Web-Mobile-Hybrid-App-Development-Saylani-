var c = 0;
while (c === 0) {
  var username = prompt("Enter a valid username: ");
  for(var i = 0; i < username.length; i++) {
    if(username[i] === "@" || username[i] === "." || username[i] === "," || username[i] === "!") {
      c = 0;
      break;
    }
    else {
      c = 1;
    }
  }
  
}
alert("Access Granted!");