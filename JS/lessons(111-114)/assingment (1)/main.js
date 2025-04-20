const selectBoxes = document.querySelectorAll("select");

// Populate the third select box with font sizes
for (let i = 16; i <= 30; i++) {
  const option = document.createElement("option");
  option.value = `${i}px`;
  option.textContent = `${i}px`;
  selectBoxes[2].append(option);
}


// Ensure at least one option exists before selecting
if (selectBoxes[2].options.length > 0) {
  selectBoxes[2].options[0].selected = true;
}
// Restore font family from localStorage
const savedFontFamily = localStorage.getItem("font-family");
if (savedFontFamily) {
  document.body.style.fontFamily = `${savedFontFamily}, sans-serif`;
 
  // selectBoxes.forEach(function (ele) {
  //   ele.style.fontFamily = `${savedFontFamily}, sans-serif`;
  // })

  // selectBoxes[0]
  // .querySelector(`option[value='${localStorage['font-family']}']`)
  // .selected = true;
  //  OR  //
  const fontOption = selectBoxes[0].querySelector(
    `option[value='${savedFontFamily}']`
  );
  if (fontOption) {
    fontOption.selected = true;
  }
}

// Restore color from localStorage
const savedColor = localStorage.getItem("color");
if (savedColor) {
  document.body.style.color = savedColor;
  // selectBoxes.forEach(function (ele) {
  //   ele.style.color = savedColor
  // })
  const colorOption = selectBoxes[1].querySelector(
    `option[value='${savedColor}']`
  );
  if (colorOption) {
    colorOption.selected = true;
  }
}

// Restore font size from localStorage
const savedFontSize = localStorage.getItem("font-size");
if (savedFontSize) {
  document.body.style.fontSize = savedFontSize;

  const fontSizeOption = selectBoxes[2].querySelector(
    `option[value='${savedFontSize}']`
  );
  if (fontSizeOption) {
    fontSizeOption.selected = true;
  }
  //   selectBoxes.forEach(function (ele) {
  //   ele.style.fontSize = savedFontSize;
  // })
}

function updateSelectedOption(select){
   // Remove selected from all options
   for (let option of select.options) {
    option.removeAttribute('selected');
   }
   const selectedOption = select.querySelector(`option[value='${select.value}']`);
   if (selectedOption) {
     selectedOption.setAttribute('selected', true);
   }
}


// Event listener for select changes
selectBoxes.forEach((select) => {
  select.addEventListener("change", () => {
    updateSelectedOption(select);
    if (select === selectBoxes[0]) {
      document.body.style.fontFamily = `${select.value}, sans-serif`;
      localStorage.setItem("font-family", select.value);
      //       selectBoxes.forEach(function (ele) {
      //         ele.style.fontFamily = `${select.value}, sans-serif`;
      //       })
    } else if (select === selectBoxes[1]) {
      document.body.style.color = select.value;
      localStorage.setItem("color", select.value);
      //       selectBoxes.forEach(function (ele) {
      //         ele.style.color = select.value
      //       })
    } else if (select === selectBoxes[2]) {
      document.body.style.fontSize = select.value;
      localStorage.setItem("font-size", select.value);
      //       selectBoxes.forEach(function (ele) {
      //         ele.style.fontSize = select.value
      //       })
    }
  });
});

