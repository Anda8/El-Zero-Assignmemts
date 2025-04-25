function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
let myMoney = 5301503206;
console.log(formatNumber(myMoney));
// ==
// console.log(myMoney.toLocaleString());

// Needed Output
// 5,301,503,206
