function palindrome(str) {
  var t = Math.floor(str.length / 2) - 1;
  var c = 0;
  for(var i = 0; i <= t; i++) {
    if (str[i] === str[(str.length) - (1 + i)]) {
      c += 1;
    }
    else {
      break;
    }
  }
  if (c === (t+1)) {
    alert("Your string is a palindrome !");
  }
  else {
    alert("Your string is not a palindrome !");
  }
}
var str = prompt("Enter a string: ");
str = str.toLowerCase();
palindrome(str);