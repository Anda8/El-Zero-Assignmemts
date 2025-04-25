function reversing(str) {
    return str.replace(/\w+/g, (word) => {
      return word.split('').reverse().join('');
  });
 
  }
  
  console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl