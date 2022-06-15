import { writeJsonFile } from "./json.js";

const fromCurrency = document.querySelector(".from select"),
	toCurrency = document.querySelector(".to select");

export function getExchangeRate() {
	const amount = document.querySelector("#montante");
	const exchangeRateTxt = document.querySelector("form .exchange-rate");
	let amountVal = amount.value;
	// if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
	/*
	if (amountVal == "" || amountVal == "0") {
		amount.value = "1";
		amountVal = 1;
	}
	*/
	exchangeRateTxt.innerText = "Obtendo taxa de câmbio...";
	let url = `https://v6.exchangerate-api.com/v6/28197f69941ed36e7787fc47/latest/${fromCurrency.value}`;
	
	//writeJsonFile(url)
	// fetching api response and returning it with parsing into js obj and in another then method receiving that obj
	fetch(url)
		.then((response) => response.json())
		.then((result) => {
			let exchangeRate = result.conversion_rates[toCurrency.value]; // getting user selected TO currency rate
			let totalExRate = (amountVal * exchangeRate).toFixed(4); // multiplying user entered value with selected TO currency rate

			exchangeRateTxt.innerHTML = `${amountVal} <span class="currency">${fromCurrency.value}</span> = ${totalExRate} <span class="currency">${toCurrency.value}</span>`;
		})
		.catch(() => {
			// if user is offline or any other error occured while fetching data then catch function will run
			exchangeRateTxt.innerText = "Something went wrong";
		});
}
