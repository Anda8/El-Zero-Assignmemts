let nums = [20, 100, 50, 10, 15, -20, 30];
let largestTwo = nums
  .sort((a, b) => b - a) //  تنازلياً
  .slice(0, 2);
console.log(largestTwo);

// Needed Output
// [100, 50]
