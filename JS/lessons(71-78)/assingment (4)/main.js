let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

const newArray = numsAndStrings.filter(function (ele, i, origArray) {
  return typeof origArray[i] === "number";
}).map((ele) => {
  return -ele;
})


/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
const numsArray = numsAndStrings.filter(function(ele, idx, numsAndStrings) {
  return !isNaN(ele)
}).map((ele) => {
  return -ele;
});

console.log(numsArray);
 [-1, -10, 10, 20, -5, -3]
 */

console.log(newArray);
// [-1, -10, 10, 20, -5, -3]