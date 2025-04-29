const myData = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
  };
  
  Object.preventExtensions(myData);
//   OR
//   Object.freeze(myData);

//   again !! you can not use defineProperty method to prevent action to the whole object => "myData"
  myData.skill = "Programming";
  
  console.log(myData.user); // Elzero
  console.log(myData.age); // 41
  console.log(myData.country); // Egypt
  console.log(myData.skill); // Undefined