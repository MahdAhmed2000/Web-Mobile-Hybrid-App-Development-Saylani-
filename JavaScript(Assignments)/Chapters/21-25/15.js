var c = 0;
var h = 0;
while (c === 0 || h === 0) {
  var username = prompt("Enter a valid username: ");
  var x = username.charAt(0);
  x = Number(x);
  if (username.length >= 6 && isNaN(x) === true) {
    h = 1;
  }
  y = username.includes("!");
  x = username.includes(".");
  z = username.includes("@");
  w = username.includes(",");
  d = username.includes("/");
  e = username.includes(":");
  q = username.includes(";");
  if (y === true || x === true || w === true || z === true || d === true || e === true || q === true) {
    c = 0;
  }
  else {
    c = 1;
  }
}
alert("Access Granted!");