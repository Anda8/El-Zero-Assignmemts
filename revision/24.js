function dashBetweenOdd(num) {
    return num.toString().replace(/([13579])(?=[13579])/g, '$1-');
  }
  
  console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
  console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922