const myDiv = document.querySelector('div');

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML === "0") {
    window.location.replace('https://elzero.org')
  }
}, 1000)