import { countryList } from "./countryList.js";
import { loadFlag } from "./loadFlag.js";
import { checkInput } from "./checkInput.js";

const fromCurrency = document.querySelector(".from select"),
	toCurrency = document.querySelector(".to select"),
	getButton = document.querySelector("form button");

getButton.addEventListener("click", (e) => {
	e.preventDefault();
	checkInput();

});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
	let tempCode = fromCurrency.value;
	fromCurrency.value = toCurrency.value;
	toCurrency.value = tempCode;
	loadFlag(countryList, fromCurrency);
	loadFlag(countryList, toCurrency); 
	checkInput();
});
