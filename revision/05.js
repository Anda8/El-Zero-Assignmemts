function replaceFirstWithLast(word) {
    let arr = [...word];
    let sp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=sp;
    return arr.join('');
  }
  
  console.log(replaceFirstWithLast("olzerE")); // Elzero
  console.log(replaceFirstWithLast("Hello")); // oelloH