const promise = new Promise((resolve, reject) => {
  const xttp = new XMLHttpRequest();
  xttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      const myData = JSON.parse(this.responseText);
      resolve(myData);
    }
  };
  xttp.open("GET","./article.json");
  xttp.send();
});
 promise.then((result) => {
  result.length = 5;
  return result;
})
.then((result)=>{
  for (obj of result) {
  const div = document.createElement('div');
const h3 = document.createElement('h3');
h3.textContent=obj.title;
const p = document.createElement('p');
p.textContent=obj.description;
div.append(h3,p);
document.body.append(div);
}
 })
