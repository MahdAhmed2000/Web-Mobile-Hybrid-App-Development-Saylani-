var firstsub = prompt("Enter first Subject marks: ");
var firstsubtotal = prompt("Enter first Subject total marks: ");
var secondsub = prompt("Enter second Subject marks: ");
var secondsubtotal = prompt("Enter second Subject total marks: ");
var thirdsub = prompt("Enter third Subject marks: ");
var thirdsubtotal = prompt("Enter third Subject total marks: ");
firstsub = parseInt(firstsub);
firstsubtotal = parseInt(firstsubtotal);
secondsub = parseInt(secondsub);
secondsubtotal = parseInt(secondsubtotal);
thirdsub = parseInt(thirdsub);
thirdsubtotal = parseInt(thirdsubtotal);
total = firstsubtotal + secondsubtotal + thirdsubtotal;
obtained = firstsub + secondsub + thirdsub;
percentage = ((obtained / total) * 100);
if (percentage >= 80) {
  grade = "A-One";
  remarks = "Excellent";
}
else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
}
else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve!";
}
else {
  grade = "Fail";
  remarks = "Sorry!";
}
document.write("Marks Sheet:".bold() + "<br>");
document.write("<br>");
document.write("<br>");
document.write("Total Marks: " + total + "<br>");
document.write("Obtained Marks: " + obtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);
