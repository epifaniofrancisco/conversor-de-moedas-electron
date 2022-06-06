import { countryList } from "./countryList.js";
import { loadFlag } from "./loadFlag.js";
import { getExchangeRate } from "./getExchangeRate.js";

const fromCurrency = document.querySelector(".from select"),
	toCurrency = document.querySelector(".to select"),
	getButton = document.querySelector("form button");

window.addEventListener("load", () => {
	getExchangeRate();
});

getButton.addEventListener("click", (e) => {
	e.preventDefault();
	getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
	let tempCode = fromCurrency.value;
	fromCurrency.value = toCurrency.value;
	toCurrency.value = tempCode;
	loadFlag(countryList, fromCurrency);
	loadFlag(countryList, toCurrency); 
	getExchangeRate(); 
});
