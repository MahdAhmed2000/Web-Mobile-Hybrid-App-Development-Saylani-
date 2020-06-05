var nums = [24, 53, 78, 91, 12];
var max;
for(var i = 0; i < nums.length; i++) {
  if (i === 0) {
    max = nums[i];
  }
  else {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
}
nums = nums.toString();
document.write("Array items: ".bold() + nums.bold() + "<br>");
max = max.toString();
document.write("The largest number is ".bold() + max.bold());