var overtime = prompt("Enter the hours worked by an Employee (per day): ");
overtime = parseFloat(overtime);
overtime = overtime * 20;
overtime = (overtime - 40);
alert("The overtime pay of your Employee is: " + (overtime * 12) + " Rs.");
