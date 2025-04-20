let myArray = ["E", "l", "z", ["e", "r"], "o"];

const stringValue = myArray.reduce((acc, element) => {
  console.log(acc+element);
  return acc + element;
}).split(",")
// ; console.log(stringValue);
.reduce(function (acc, element) {
  return acc + element;
}
);

console.log(stringValue);
// Elzero

