let nums = [10, -20, 300, 50, 100, -50];
// 1
let maxNumber = Math.max(...nums);

console.log(maxNumber); // 300
// 2
maxNumber = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > maxNumber) {
    maxNumber = nums[i];
  }
}

console.log(maxNumber);
// 3
maxNumber = nums.reduce(
  (max, current) => (current > max ? current : max),
  nums[0]
);

console.log(maxNumber);
//   4
maxNumber = nums.sort((a, b) => b - a)[0];

console.log(maxNumber);
