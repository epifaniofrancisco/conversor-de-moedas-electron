import { isConnect } from "./isConnect.js";

isConnect();

/* 
TODO: Converter para outras moedas depois de converter para USD primeiro
TODO: Ao estar conectado, usar a API para converter as moedas
*/

function calculateTotalExchangeRate(amountVal, exchangeRate) {
	let totalExRate = (amountVal * exchangeRate).toFixed(4);

	return totalExRate;
}

function showResult(
	exchangeRateTxt,
	amountVal,
	fromCurrency,
	totalExRate,
	toCurrency
) {
	return (exchangeRateTxt.innerHTML = `${amountVal} <span class="currency">${fromCurrency.value}</span> = ${totalExRate} <span class="currency">${toCurrency.value}</span>`);
}

const fromCurrency = document.querySelector(".from select"),
	toCurrency = document.querySelector(".to select");

export async function getExchangeRate() {
	const amount = document.querySelector(".amount");
	const exchangeRateTxt = document.querySelector("form .exchange-rate");
	let amountVal = amount.value;
	let apiData;

	if (isConnect()) {
		const res = await fetch(
			"https://api.exchangerate.host/latest?base=USD"
		);

		console.log("Online");

		apiData = await res.json();
		localStorage.setItem("currencyRates", JSON.stringify(apiData.rates));
		exchangeRateTxt.innerText = "Obtendo taxa de câmbio...";

		let exchangeRate = apiData.rates[toCurrency.value];
		let totalExRate = calculateTotalExchangeRate(amountVal, exchangeRate);

		showResult(
			exchangeRateTxt,
			amountVal,
			fromCurrency,
			totalExRate,
			toCurrency
		);
	} else {
		// Verifica se os itens estão guardados
		if (localStorage.getItem("currencyRates") === null) {
			const statusOfConnection = document.querySelector(".status-data");

			statusOfConnection.innerText = "Conecte-se para baixar os dados!"
		} else {
			apiData = JSON.parse(localStorage.getItem("currencyRates"));
			exchangeRateTxt.innerText = "Obtendo taxa de câmbio...";

			console.log("Offline");
			let exchangeRate = apiData[toCurrency.value]; // getting user selected TO currency rate
			let totalExRate = calculateTotalExchangeRate(
				amountVal,
				exchangeRate
			);

			showResult(
				exchangeRateTxt,
				amountVal,
				fromCurrency,
				totalExRate,
				toCurrency
			);
		}
	}
}
