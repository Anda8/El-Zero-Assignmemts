let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;
let result = nums.reduce((acc, curr) => {
  return Math.abs(acc - goal) > Math.abs(curr - goal) ? curr : acc;
});
console.log(result);

// Your Code Here

// Closest Number Is 88
