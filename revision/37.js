let numOne = 100;
let numTwo = 200;

if (numOne > numTwo) {
  console.log("1st > 2nd");
} else if (numOne < numTwo) {
  console.log("1st < 2nd");
} else {
  console.log("1st = 2nd");
}

// 1st < 2nd

// Write Your Ternary Operator Code Here
console.log(
    numOne > numTwo ? "1st > 2nd" :
    numOne < numTwo ? "1st < 2nd" :
    "1st = 2nd"
  ); 