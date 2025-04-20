function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) document.write( "Second Number Not Found");

  switch (operation) {
    case "subtract":
      document.write(`${firstNum - secondNum}<br>`);
      break;
    case "multiply":
      document.write(`${firstNum * secondNum}<br>`);
      break;
    case "add":
    default:
      document.write(`${firstNum + secondNum}<br>`);
      break;
  }
}

// Needed Output
console.log();

calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600