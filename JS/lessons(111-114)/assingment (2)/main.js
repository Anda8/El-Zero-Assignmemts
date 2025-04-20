const myForm = document.querySelector('form');

getSessionStorage();//save on reload
for (let i = 0; i < myForm.length; i++) {
  myForm[i].addEventListener('change',() => {
    sessionStorage.setItem(myForm[i].name,myForm[i].value);
  });
}



function getSessionStorage() {
  for (let i = 0; i < myForm.length; i++) { 
    if (sessionStorage[myForm[i].name]) {
      myForm[i].value = sessionStorage[myForm[i].name];
    }
  }
}