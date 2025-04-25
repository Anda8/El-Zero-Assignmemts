function repeatWithRules(word) {
    let arr = [...word];
   return arr.map((element, index) => element.repeat(index+1)).join('');
  }
  
  console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
  console.log(repeatWithRules("Hello")); // Heelllllllooooo