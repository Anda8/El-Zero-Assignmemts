const xhttp = new XMLHttpRequest();
xhttp.open("GET", "../assingment (1)/article.json");
xhttp.send();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const mainData = JSON.parse(this.responseText);
    const container = document.createElement('div');
    container.id='data';
    for (obj of mainData) {
      const div = document.createElement('div');
      const h2 = document.createElement('h2');
      h2.innerHTML = obj.title;
      const p1 = document.createElement('p')
      p1.innerHTML = obj.content;
      const p2 = document.createElement('p')
      p2.innerHTML = `Author: ${obj.author}`;
      const p3 = document.createElement('p')
      p3.innerHTML = `Category: ${obj.category}`;
      div.append(h2, p1, p2, p3);
      container.append(div);
      document.body.append(container);
      // document.scripts[0].before(container);
    }
  }
};