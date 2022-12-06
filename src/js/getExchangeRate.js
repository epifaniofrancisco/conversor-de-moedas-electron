import { isConnect } from "./isConnect.js";

isConnect();

/* 
TODO: Verificar se há ligação a internet e se consegue aceder aos dados
TODO: Converter para outras moedas depois de converter para USD primeiro
TODO: Verificar se os dados já foram guardados
TODO: Verificar se já se conectou a internet para baixar os dados
*/

function calculateTotalExchangeRate(totalExRate, amountVal, exchangeRate) {
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
	const amount = document.querySelector("#montante");
	const exchangeRateTxt = document.querySelector("form .exchange-rate");
	let amountVal = amount.value;
	let apiData;

	if (isConnect()) {
		const res = await fetch(
			"https://v6.exchangerate-api.com/v6/28197f69941ed36e7787fc47/latest/USD"
		);

		apiData = await res.json();
		localStorage.setItem(
			"currencyData",
			JSON.stringify(apiData.conversion_rates)
		);
		exchangeRateTxt.innerText = "Obtendo taxa de câmbio...";

		let exchangeRate = apiData.conversion_rates[toCurrency.value];
		let totalExRate = calculateTotalExchangeRate(amountVal, exchangeRate);

		showResult(
			exchangeRateTxt,
			amountVal,
			fromCurrency,
			totalExRate,
			toCurrency
		);
	} else {
		apiData = JSON.parse(localStorage.getItem("currencyData"));
		exchangeRateTxt.innerText = "Obtendo taxa de câmbio...";
		let exchangeRate = apiData[toCurrency.value]; // getting user selected TO currency rate
		let totalExRate = calculateTotalExchangeRate(amountVal, exchangeRate);

		showResult(
			exchangeRateTxt,
			amountVal,
			fromCurrency,
			totalExRate,
			toCurrency
		);
	}
}
