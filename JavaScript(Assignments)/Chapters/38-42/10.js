var cash = prompt("Enter an amount to be withdrawn: ");
cash = parseFloat(cash);
var rem;
var one;
var arr2 = [0, 0, 0, 0, 0];
var arr1 = [100, 50, 10, 5, 1];
var i = 0;
while (cash > 0) {
  rem = cash % arr1[i];
  one = cash - rem;
  one = one / arr1[i];
  arr2[i] = one;
  i += 1;
  cash = rem;
}
alert("You will get " + arr2[0] + " Hundred, " + arr2[1] + " Fifty, " + "and " + arr2[2] + " Ten Notes, " + arr2[3] + " Five, " + " and " + arr2[4] + " One Notes"); 