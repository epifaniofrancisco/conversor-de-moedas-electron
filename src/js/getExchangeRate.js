import { isConnect } from "./isConnect.js";

isConnect()

/* 
TODO: armazenar os dados da API em uma variável 
TODO: usar o if/else para calcular quando internet estiver ligada e desligada
TODO: Converter para outras moedas depois de converter para outra moeda primeiro
TODO: Verificar se os dados já foram guardados
TODO: Verificar se já se conectou a internet para baixar os dados
*/

const fromCurrency = document.querySelector(".from select"),
	toCurrency = document.querySelector(".to select");

export async function getExchangeRate() {
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
	let apiData;
	
	if (isConnect()) {
	
		const res = await fetch(
			"https://v6.exchangerate-api.com/v6/28197f69941ed36e7787fc47/latest/USD"
		);
	
		apiData = await res.json();
		localStorage.setItem("currencyData", JSON.stringify(apiData.conversion_rates))
		exchangeRateTxt.innerText = "Obtendo taxa de câmbio...";

		let exchangeRate = apiData.conversion_rates[toCurrency.value]; // getting user selected TO currency rate

		let totalExRate = (amountVal * exchangeRate).toFixed(4); // multiplying user entered value with selected TO currency rate

		exchangeRateTxt.innerHTML = `${amountVal} <span class="currency">${fromCurrency.value}</span> = ${totalExRate} <span class="currency">${toCurrency.value}</span>`;
	} else {
		apiData = JSON.parse(localStorage.getItem("currencyData"));

		let exchangeRate = apiData[toCurrency.value]; // getting user selected TO currency rate

		console.log(exchangeRate);

		let totalExRate = (amountVal * exchangeRate).toFixed(4); // multiplying user entered value with selected TO currency rate

		exchangeRateTxt.innerHTML = `${amountVal} <span class="currency">${fromCurrency.value}</span> = ${totalExRate} <span class="currency">${toCurrency.value}</span>`;
	}

	// let url = `https://v6.exchangerate-api.com/v6/28197f69941ed36e7787fc47/latest/${fromCurrency.value}`;

	// fetching api response and returning it with parsing into js obj and in another then method receiving that obj
	// fetch(url)
	// 	.then((response) => response.json())
	// 	.then((result) => {
	// 		let exchangeRate = result.conversion_rates[toCurrency.value]; // getting user selected TO currency rate

	// 		localStorage.setItem(
	// 			"url",
	// 			JSON.stringify(result.conversion_rates)
	// 		);

	// 		let totalExRate = (amountVal * exchangeRate).toFixed(4); // multiplying user entered value with selected TO currency rate

	// 		exchangeRateTxt.innerHTML = `${amountVal} <span class="currency">${fromCurrency.value}</span> = ${totalExRate} <span class="currency">${toCurrency.value}</span>`;
	// 	})
	// 	.catch(() => {
	// 		// if user is offline or any other error occured while fetching data then catch function will run
	// 		exchangeRateTxt.innerText = "Something went wrong";
	// 	});
}
