var scores = [];
var x = prompt("How many student scores do you have?:");
x = parseInt(x);
for (var i = 0; i < x; i++) {
  scores[i] = prompt("Enter the score of student: " + (i+1));
}
document.write("Scores of Students: " + scores + "<br>");
scores = scores.sort();
document.write("Ordered Scores of Students: " + scores);