let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

Object.freeze(myData);

myData.push("Name");// Error
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']

// NOTE 
// مش هتنفع بشكل مباشر تمنع الإضافة لمصفوفة كاملة.
// تقدر تستخدمها لتمنع التعديل على عنصر معيّن، زي كده:
// Object.defineProperty(myData, 0, {
//     writable: false,
//     configurable: false
//   });
  