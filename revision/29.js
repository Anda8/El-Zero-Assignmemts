function customCalc(...params){
    const numbers = params.map(item => Number(item)).filter(num => !isNaN(num));
    if(numbers.length==0)return 0;
    let first=numbers[0],last=numbers[numbers.length-1];
    let sum = numbers.reduce((acc,curr)=>curr+acc,0)
    return sum * first * last; 
}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10