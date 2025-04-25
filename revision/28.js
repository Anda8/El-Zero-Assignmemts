function customMerge(...arrays){
    const merged = [];
  
    for (const arr of arrays) {
      for (const element of arr) {
        merged.push(Number(element)); 
      }
    }
    return merged.sort((a, b) => a - b);
}
console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]