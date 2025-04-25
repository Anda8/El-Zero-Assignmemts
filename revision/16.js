function getCharacters(word, nums) {
    let arr = word.split(' ');
    return arr[0].slice(0,nums)+arr[1].slice(-nums);
  }
  
  console.log(getCharacters("Elzero School", 2)); // Elol
  console.log(getCharacters("Elzero School", 3)); // Elzool