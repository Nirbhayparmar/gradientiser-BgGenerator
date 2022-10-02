// Get elements from the DOM
const color1 = document.getElementById("c1");
const color2 = document.getElementById("c2");
const css = document.getElementById("code");
const body = document.getElementById("gradient");
const button = document.getElementById("random");
const radioGroup = document.getElementById("radioIn");
const radioButton = radioGroup.getElementsByTagName("input");
let direction;
const directions = ["0deg", "90deg", "180deg", "270deg"];

//the event listener is to be added.
for (let x = 0; x < radioButton.length; x++) {
	radioButton[x].addEventListener("input", radioValue);
}

function radioValue() {
	for (let j = 0; j < radioButton.length; j++) {
		if (radioButton[j].checked) {
			direction = radioButton[j].value;
			body.style.background = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
			css.textContent = body.style.background + ";";
		}
	}
}
function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++)
		color += letters[Math.floor(Math.random() * 16)];
	return color;
}

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
	console.log(body.style.background);
}

function randomGradient() {
	let randomColor1 = getRandomColor();
	let randomColor2 = getRandomColor();

	while (randomColor1 == randomColor2) {
		randomColor1 = getRandomColor();
		randomColor2 = getRandomColor();
	}

	color1.value = randomColor1;
	color2.value = randomColor2;
	let rand_direction = directions[Math.floor(Math.random() * 4)];
	body.style.background = `linear-gradient(${rand_direction}, ${randomColor1}, ${randomColor2})`;
	css.textContent = `${body.style.background};`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);

window.onload = randomGradient();
