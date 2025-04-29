function createStars(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
      let line = "*".repeat(i * 2 - 1);
      result += line + "\n";
  }
  return result;
}
  
  console.log(createStars(8));

 
  // Output Needed
//   *  
//   *** 
//   *****
//   *******
//   *********
//   ***********
//   *************
//   ***************