let arr = [1, 1, 1, 2, 3, 4, 3];
// 1
console.log([...new Set(arr)]);
// 2
let mymap = new Map();
let uniqueElements = arr.filter((x) => {
    if (!mymap[x]) {
        mymap[x] = 1; 
        return x
      } else {
        mymap[x]++;   
      }
});
console.log(uniqueElements);
// 3
 uniqueElements = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueElements); 
// 4
uniqueElements  = arr.reduce((acc, current) => {
    return acc.includes(current) ? acc : [...acc, current];
  }, []);
console.log(uniqueElements); // [1, 2, 3, 4]