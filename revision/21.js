function getLastDigit(num) {
    return Number(
        [...num.toString()]
          .filter((_, i, arr) => i === arr.length - 1)
          .join('')
      );
// return Number(num.toString().slice(-1));
}

console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // number
