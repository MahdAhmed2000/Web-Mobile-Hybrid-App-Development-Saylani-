function percentage(num1, total1, num2, total2, num3, total3){
  var percent = [];
  percent.push((num1 / total1) * 100);
  percent.push((num2 / total2) * 100);
  percent.push((num3 / total3) * 100);
  for(var i = 0; i < percent.length; i++){
    percent[i] = percent[i].toString() + "%";
  }
  return percent;
}
function averaging(num1, num2, num3){
  var average1 = (num1 + num2 + num3) / 3;
  return average1;
}
function main(num1, total1, num2, total2, num3, total3){
  var percents = percentage(num1, total1, num2, total2, num3, total3);
  var average = averaging(num1, num2, num3);
  alert("Your average is: " + average + " respectively");
  alert("Your percentages are: " + percents + " respectively");
}
var x = prompt("Enter your first subject's marks: (like obt/total marks)");
var y = prompt("Enter your second subject's marks: (like obt/total marks)");
var z = prompt("Enter your third subject's marks: (like obt/total marks)");
var index1 = x.indexOf("/");
var index2 = y.indexOf("/");
var index3 = z.indexOf("/");
var number1 = "";
var number2 = "";
var number3 = "";
var total1 = "";
var total2 = "";
var total3 = "";
for(var i = 0; i < index1; i++){
  number1 = number1.concat(x[i]);
}
for(var i = 0; i < index2; i++){
  number2 = number2.concat(y[i]);
}
for(var i = 0; i < index3; i++){
  number3 = number3.concat(z[i]);
}
number1 = parseFloat(number1);
number2 = parseFloat(number2);
number3 = parseFloat(number3);
for(var i = (index1 + 1); i < x.length; i++){
  total1 = total1.concat(x[i]);
}
for(var i = (index2 + 1); i < y.length; i++){
  total2 = total2.concat(y[i]);
}
for(var i = (index3 + 1); i < z.length; i++){
  total3 = total3.concat(z[i]);
}
total1 = parseFloat(total1);
total2 = parseFloat(total2);
total3 = parseFloat(total3);
main(number1, total1, number2, total2, number3, total3);

  