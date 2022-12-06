import { getExchangeRate } from "./getExchangeRate.js";

var input = document.querySelector(".amount");

export function checkInput() {
	var inputValue = input.value.trim();

	if (inputValue === "") {
		setErrorFor(input, "Digite um número");
	} else if (inputValue <= "0") {
		setErrorFor(input, "Digite um número maior que 0");
	} else {
		setSuccessFor(input);
		getExchangeRate();
	}
}

function setErrorFor(input, message) {
	var inputGroup = input.parentElement;
	var span = inputGroup.querySelector("span");

	span.innerText = message;
	span.classList.add("active");
	inputGroup.className = "input-group error";
}

function setSuccessFor(input) {
	var inputGroup = input.parentElement;

	inputGroup.className = "input-group";
}
