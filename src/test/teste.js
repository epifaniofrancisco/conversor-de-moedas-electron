import { countryList } from "../js/countryList.js";
import { loadFlag } from "../js/loadFlag.js";

const dropList = document.querySelectorAll("select");

for (let i = 0; i < dropList.length; i++) {
	for (let currency_code in countryList) {
		// selecionando USD por padrão como moeda FROM e AOA como moeda TO
		let selected =
			i == 0
				? currency_code == "USD"
					? "selected"
					: ""
				: currency_code == "AOA"
				? "selected"
				: "";
		// criando tag de opção com passagem de código de moeda como texto e valor
		let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
		// inserindo a tag de opções dentro da tag select
		dropList[i].insertAdjacentHTML("beforeend", optionTag);
	}
	dropList[i].addEventListener("change", (e) => {
		loadFlag(countryList, e.target); // chamando loadFlag passando o elemento de destino como um argumento
	});
}


