let theNumber = 100020003000;
console.log(theNumber.toString());

console.log(+[...new Set(theNumber.toString())].filter(n => +n).join(''));
console.log(typeof +[...new Set(theNumber.toString())].filter(n => +n).join(''));

// Needed Output
// 123