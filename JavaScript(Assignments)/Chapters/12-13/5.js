var correctpass = "MahdAhmed";
while (true) {
  var password = prompt("Please Enter your Password!");
  var t = password.length;
  if (t >= 1) {
    break;
  }
}
if (password === correctpass) {
  alert("Correct! The password you entered matches the original password!");
}
else {
  alert("Incorrect password");
  document.write("The correct Password for this question is: " + correctpass);
}
  

