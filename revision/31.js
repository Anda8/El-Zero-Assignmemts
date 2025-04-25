let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray1 = [...myArray];

// Method 2
let clonedArray2 = new Array(...myArray);

// Method 3
let clonedArray3 = Array.from(myArray);

// Method 4
let clonedArray4 = myArray.slice();

// Method 5
let clonedArray5 = myArray.map(item => item);

// Method 6
let clonedArray6 =[].concat(myArray);

// Method 7
let clonedArray7 = JSON.parse(JSON.stringify(myArray));

// Method 8
let clonedArray8 = Object.assign([], myArray);
// Method 9
let clonedArray9 =[];
 for (let i = 0; i < myArray.length; i++) {
    clonedArray9[i] = myArray[i];
}

console.log(clonedArray1); // [100, 200, 300, 400]
console.log(clonedArray2); // [100, 200, 300, 400]
console.log(clonedArray3); // [100, 200, 300, 400]
console.log(clonedArray4); // [100, 200, 300, 400]
console.log(clonedArray5); // [100, 200, 300, 400]
console.log(clonedArray6); // [100, 200, 300, 400]
console.log(clonedArray7); // [100, 200, 300, 400]
console.log(clonedArray8); // [100, 200, 300, 400]
console.log(clonedArray9); // [100, 200, 300, 400]