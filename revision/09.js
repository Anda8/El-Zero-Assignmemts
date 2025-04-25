function swapEveryTwoChars(word) {
   let result= Array.from(word).map((ch, i) => {
     return (i%2==0)? (ch.toUpperCase()==ch)? ch.toLowerCase():ch.toUpperCase() : ch;
   })
   return result.join('');
  }
  
  console.log(swapEveryTwoChars("elZeRo")); // Elzero
  console.log(swapEveryTwoChars("heLlO")); // Hello