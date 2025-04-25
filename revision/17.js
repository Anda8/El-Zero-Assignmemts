function formatName(theName) {
  let arr = theName.split(" ");
  return arr
    .map((ele) => ele[0])
    .map((char, i) => i === 0 ? char.toUpperCase() : char.toLowerCase())
    .join(".");
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
