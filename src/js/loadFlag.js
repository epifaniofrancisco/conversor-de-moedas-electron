export function loadFlag(countryList, element) {
	for (let code in countryList) {
		if (code == element.value) {
			// se o código da moeda da lista de países for igual ao valor da opção
			let imgTag = element.parentElement.querySelector("img"); // selecionando a tag img de uma drop list específica
			// passando o código do país de um código de moeda selecionado em um url img
			imgTag.src = `../assets/images/bandeiras/${countryList[
				code
			].toLowerCase()}.png`;
		}
	}
}
