var x;
document.write("Variable declared!".bold() + "<br>");
document.write("Value after variable declaration is: " + x + "<br>");
x = 1947;
document.write("Initial value: " + x + "<br>");
x += 1;
document.write("Value after increment is: " + x + "<br>");
x += 7;
document.write("Value after addition is: " + x + "<br>");
x -= 1;
document.write("Value after decrement is: " + x + "<br>");
x = x % 3;
document.write("Remainder after division by 3 is: " + x);