names = [];
scores = [];
for (var i = 0; i < 3; i++) {
  var name = prompt("Enter student name:");
  var score = prompt("Enter " + name + "'s marks out of 500:");
  names[i] = name;
  scores[i] = score;
}
for (var i = 0; i < names.length; i++) {
  var per = (scores[i] / 500) * 100;
  document.write("Score of " + names[i] + " is " + scores[i] + "." + "Percentage: " + per + "%" + "<br>");
}