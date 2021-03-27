let color1 = document.getElementById("c1");
let color2 = document.getElementById("c2");
let css = document.getElementById("code");
let body = document.getElementById("gradient");
let button = document.getElementById("random");
let radioGroup = document.getElementById("radioIn");
let radioButton = radioGroup.getElementsByTagName("input");
let direction;

//the event listner is to be added.
for (let x = 0; x < radioButton.length; x++) {
  radioButton[x].addEventListener("input", radioValue);
}

function radioValue() {
  for (let j = 0; j < radioButton.length; j++) {
    if (radioButton[j].checked) {
      direction = radioButton[j].value;
      //console.log(direction);
    }
  }
}
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

function setgradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
  console.log(body.style.background);
}

function randomgradient() {
  let randomColor1 = getRandomColor();
  let randomColor2 = getRandomColor();
  color1.value = randomColor1;
  color2.value = randomColor2;
  body.style.background =
    "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
button.addEventListener("click", randomgradient);

window.onload = randomgradient();
