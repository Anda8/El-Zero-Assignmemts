document.body.style.cssText =
  "font-family: arial; background-color: #ECECEC; margin:0; padding:0; box-sizing:border-box;";

const header = document.createElement("header");
header.classList.add("header");
header.style.display = "flex";
header.style.flexWrap = "wrap";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "0 20px";
header.style.backgroundColor = "white";

//children
const logo = document.createElement("h3");
logo.setAttribute("class", "logo");
const logoText = document.createTextNode("Elzero");
logo.appendChild(logoText);
logo.style.cssText =
  "color: #23A96E; font-size:25px; font-weight: 800; margin-left: 15px";

const ul = document.createElement("ul");
ul.style.display = "flex";
ul.style.justifyContent = "space-between";
ul.style.alignItems = "center";
ul.style.gap = "10px";
const allFeatures = ["Home", "About", "Services", "Contact"];

for (let i = 0; i < allFeatures.length; i++) {
  const li = document.createElement("li");
  li.style.listStyle = "none";
  // li.style.flex = '1 1 calc(25% - 15px)';
  li.style.textAlign = "center";
  li.textContent = allFeatures[i];
  ul.append(li);
}
header.append(logo);
header.append(ul);
document.body.append(header);

//end of header
//start of content
const content = document.createElement("div");
content.classList.add("content");
content.style.cssText = `
margin: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));`;

for (let i = 0; i < 15; i++) {
  const theProduct = document.createElement("div");
  theProduct.setAttribute("class", `product-${i + 1}`);

  const productText = document.createElement("span"); // استخدمي عنصر HTML
  productText.textContent = `${i + 1}`;
  productText.style.cssText = `
    font-size: 25px;
    font-weight: bold;
    color :black;
  `;
  theProduct.append(productText);
  theProduct.style.cssText = `
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-size: 18px;
  gap:5px;
  color: gray;`;
  theProduct.append("product");
  content.append(theProduct);
}

header.after(content);
//end of content
//start o footer 
const footer = document.createElement('footer');
const footerText = document.createTextNode('Copyright 2024');
logo.setAttribute('class', 'footer');
footer.style.cssText = `
background-color: #23A96E; 
padding: 30px; display: flex; 
justify-content: center; align-items: center; 
color: white; font-weight: bold; font-size: 18px;`

footer.append(footerText);
content.after(footer);
//end of footer
const mediaQuery = window.matchMedia("(max-width: 450px)");
function handleMediaChange(e) {
  if (e.matches) {
    logo.style.width = "100%";
    logo.style.textAlign = "center";
    ul.style.width = "100%";
    ul.style.flexDirection = "column";
  } else {
    logo.style.width = "";
    logo.style.textAlign = "";
    ul.style.width = "";
    ul.style.flexDirection = "row";
  }
}
handleMediaChange(mediaQuery);
