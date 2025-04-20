/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar",];

let i = +false; // +false = 0;

for (; i < myAdmins.length; ) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  i++;
}
document.write(`<div>We Have ${i} Admins</div>`);
document.write(`<hr>`)

outerLoop: for (let i = +false; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }

  document.write(`<div> The Admin for Team ${i + +true} is: ${myAdmins[i]}`); // +true = 1;
  document.write(`<h3>Team Members:</h3>`);

  let counter = +true;
  nestedLoop: for (let j = +false; j < myEmployees.length; j++) {
    if (myAdmins[i].substring(+false, +true) === myEmployees[j].substring(+false, +true)) {
      document.write(`<p>${counter}: ${myEmployees[j]}</p>`)
      counter++;
    }
  }
  document.write("</div>");
  document.write("<hr>");
}
/**
 * 
  Loop Challenge


let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Anda",
  "Sama"
];
let company = [];
document.write(`<div>We Have X Admins</div>`);
document.write(
  `<div>We Have ${myAdmins.indexOf(
    "Stop"
  )} Admins</div> <hr style="border: 1px solidrgb(180, 182, 187);">`
);

//index myAdmins ?? and check if the first letter of myEmployees are equals or not and if the admin not equal Stop
for (let i = 0; i < myAdmins.length; i++) {
  let count = 0;
  if (myAdmins[i] == "Stop") break;
  document.write(`<div style="text-transform: capitalize;">The Admin for Team ${
    i + 1
  } is ${myAdmins[i]}</div> 
    <br>
   <div style="text-transform: capitalize; font-weight: bold; font-size: 20px; "> Team Members: </div> `);
  for (let index = 0; index < myEmployees.length; index++) {
    if (myAdmins[i].charAt(0) == myEmployees[index].charAt(0)) {
      count++;
      document.write(`${count} - ${myEmployees[index]} <br> `);
    }
  }
  document.write(`<hr style="border: 1px solidrgb(195, 198, 205);"> `);
}

 */