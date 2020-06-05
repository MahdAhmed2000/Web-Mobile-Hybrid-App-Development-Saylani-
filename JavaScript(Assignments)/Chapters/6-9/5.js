var firstsub = prompt("Enter your first subject:");
var secondsub = prompt("Enter your second subject:");
var thirdsub = prompt("Enter your third subject:");
var first = prompt("Enter your " + firstsub + " marks out of hundred:");
var second = prompt("Enter your " + secondsub + " marks out of hundred:");
var third = prompt("Enter your " + thirdsub + " marks out of hundred:");
document.getElementById("Subjects").innerHTML = "Subjects";
document.getElementById("tm").innerHTML = "Total Marks";
document.getElementById("om").innerHTML = "Obtained Marks";
document.getElementById("p").innerHTML = "Percentage";
document.getElementById("firstsub").innerHTML = firstsub;
document.getElementById("secondsub").innerHTML = secondsub;
document.getElementById("thirdsub").innerHTML = thirdsub;
document.getElementById("firstmarks").innerHTML = first;
document.getElementById("secondmarks").innerHTML = second;
document.getElementById("thirdmarks").innerHTML = third;
document.getElementById("per1").innerHTML = first + "%";
document.getElementById("per2").innerHTML = second + "%";
document.getElementById("per3").innerHTML = third + "%";
document.getElementById("total total marks").innerHTML = 300;
first = parseFloat(first);
second = parseFloat(second);
third = parseFloat(third);
document.getElementById("total obtained marks").innerHTML = first + second + third;
document.getElementById("total percentage").innerHTML = (((first+second+third) / 300) * 100) + "%";









