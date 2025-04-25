function addEl(str) {
  // if (str == "") return str;
  // if (/^El/.test(str)) return str;
  // else return ("El" + str);

   return str === "" ? str : str.startsWith("El") ? str : "El" + str;
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero
