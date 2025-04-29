function createStars(num) {
  let result="";
  for (let i = num ; i >= 1; i--) {
    const spaces = " ".repeat(num - i);
    const stars = "*".repeat(i * 2 - 1);
    result += spaces+stars+ "\n";
  }
  for (let i = 1; i <= num; i++) {
    const spaces = " ".repeat(num - i);
    const stars = "*".repeat(i * 2 - 1);
    result += spaces+stars+ "\n";
  }
  return result;
  }
  
  console.log(createStars(6));
  
  // Output Needed
//   ***********
//    *********
//     *******
//      *****
//       ***
//        *
//        *
//       ***
//      *****
//     *******
//    *********
//   ***********