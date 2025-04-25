let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
//1
console.log(myArr.filter((x) => false));
//2
while (myArr.length) {
  myArr.pop();
}
console.log(myArr);
//3
myArr.splice(0, myArr.length);
console.log(myArr);
//4
myArr.length = 0;
console.log(myArr);
// Output Needed
// []
