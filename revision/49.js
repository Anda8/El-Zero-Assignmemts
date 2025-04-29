function createStars(num) {
  let result="";
  for (let i = 1; i <= num; i++) {
    result += "*".repeat(i * 2 - 1) + "\n";
  }
  for (let i = num - 1; i >= 1; i--) {
    result += "*".repeat(i * 2 - 1) + "\n";
  }
  return result;

}

console.log(createStars(3));

// Output Needed
//   *
//   ***
//   *****
//   ***
//   *

console.log(createStars(7));

// Output Needed
//   *
//   ***
//   *****
//   *******
//   *********
//   ***********
//   *************
//   ***********
//   *********
//   *******
//   *****
//   ***
//   *
