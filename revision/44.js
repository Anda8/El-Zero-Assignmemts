let last = 30;
let sum = 0;
function print(last) {
    let curr = last % 2 === 0 ? last - 1 : last - 2;
    
    while (curr >= 1) {
        console.log(curr); 
        sum += curr;      
        curr -= 4;
    }
  return sum;
}
console.log(print(last));

// // First Request Output Needed
// 29
// 25
// 21
// 17
// 13
// 9
// 5
// 1

// // Second Request Output Needed
// 120
