var nums = [24, 53, 78, 91, 12];
var min;
for(var i = 0; i < nums.length; i++) {
  if (i === 0) {
    min = nums[i];
  }
  else {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
}
nums = nums.toString();
document.write("Array items: ".bold() + nums.bold() + "<br>");
min = min.toString();
document.write("The smallest number is ".bold() + min.bold());