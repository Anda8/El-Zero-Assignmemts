let str = "i lovE elzeRO weB schOOL";
let result = str
  .replace(/\b\w/g, (char) => char.toUpperCase())
  .replace(/\B\w/g, (char) => char.toLowerCase());
  console.log(result);
  
//    OR
// let regex = /\w+/g
// let arr=str.match(regex);
// let result = arr.map((x)=>{
//     x= x.toLowerCase();
//     let arr = Array.from(x);
//     arr[0]=arr[0].toUpperCase();
//     return arr.join("");
// })
// console.log(result.join(" "));

// Output Needed
// "I Love Elzero Web School"
