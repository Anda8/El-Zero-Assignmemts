let rangeEnd = 10;
let myRange = [];
// 1
for (let i = 1; i <= rangeEnd; i++) {
  myRange.push(i);
}
// Output Needed
console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2
 myRange = Array.from({length: rangeEnd}, (_, index) => index + 1);
console.log(myRange);
// 3
myRange = [...Array(rangeEnd + 1).keys()].slice(1);
console.log(myRange);
// 4
myRange = [...Array(rangeEnd)].map((_, i) => i + 1);
console.log(myRange);