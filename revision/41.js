const myData = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
  };
  
  // Your Code Here
  const cloned1 = Object.assign({}, myData);
  const cloned2 = { ...myData };
  const cloned3 = JSON.parse(JSON.stringify(myData))
  const cloned4 = Object.create({},Object.getPrototypeOf(myData));
  Object.assign(cloned4, myData);
  console.log(cloned1); // {user: 'Elzero', age: 41, country: 'Egypt'}
  console.log(cloned2);
  console.log(cloned3);
  console.log(cloned4);