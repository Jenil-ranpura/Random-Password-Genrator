let btn = document.querySelector("button");
let input = document.querySelector("input");
let main = document.querySelector(".two");
let display = document.querySelector(".display");

input.disabled = true;

function random () {
	let password = "";
	let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 	let lowerCase = "abcdefghijklmnopqrstuvwxyz";
 	let numbers = "0123456789";
 	let symbol = "!@#$%^&*";

	password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
	password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password = password + numbers[Math.floor(Math.random() * numbers.length)];
	password = password + symbol[Math.floor(Math.random() * symbol.length)];

	password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
	password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password = password + numbers[Math.floor(Math.random() * numbers.length)];
	password = password + symbol[Math.floor(Math.random() * symbol.length)];

	input.value = password;
}

btn.addEventListener("click", random);

// let count = 0;
// input.disabled = true;

// function random () {
// 	let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 	let lowerCase = "abcdefghijklmnopqrstuvwxyz";
// 	let numbers = "0123456789";
// 	let symbol = "!@#$%^&*";

// 	let password = "";
// 	password = password + upperCase[Math.floor(Math.random() *upperCase.length)];
// 	password = password + lowerCase[Math.floor(Math.random() *lowerCase.length)];
// 	password = password + numbers[Math.floor(Math.random() *numbers.length)];
// 	password = password + symbol[Math.floor(Math.random() *symbol.length)];

// 	password = password + upperCase[Math.floor(Math.random() *upperCase.length)];
// 	password = password + lowerCase[Math.floor(Math.random() *lowerCase.length)];
// 	password = password + numbers[Math.floor(Math.random() *numbers.length)];
// 	password = password + symbol[Math.floor(Math.random() *symbol.length)];

// 	password = password + upperCase[Math.floor(Math.random() *upperCase.length)];
// 	password = password + lowerCase[Math.floor(Math.random() *lowerCase.length)];
// 	password = password + numbers[Math.floor(Math.random() *numbers.length)];
// 	password = password + symbol[Math.floor(Math.random() *symbol.length)];

// 	input.value = password;

// 	count++;
// 	let clear = document.createElement("button");
// 	clear.innerHTML = "clear";
// 	main.appendChild(clear);

// 	clear.addEventListener("click", () => {
// 		input.value = "";
// 	})

// 	if(count > 1) {
// 		clear.remove();
// 	}

// 	display.style.height = "15vh";
// }

// btn.addEventListener("click", random);