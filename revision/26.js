let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// 1
console.log([...new Set(myArr)]);
// 2
mymap = new Map();
let arr1 = myArr.filter((x) => {
    if (!mymap[x]) {
        mymap[x] = 1; 
        return x
      } else {
        mymap[x]++;   
      }
});
console.log(arr1);
// 3
let uniqueArr = myArr.filter((item, index) => myArr.indexOf(item) === index);
console.log(uniqueArr); 
// 4
let arr = myArr.reduce((acc, current) => {
    return acc.includes(current) ? acc : [...acc, current];
  }, []);
  console.log(arr);

// Output Needed
// [10, 20, 30, 50]
