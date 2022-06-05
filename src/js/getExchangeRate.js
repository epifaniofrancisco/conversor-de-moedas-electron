export function getExchangeRate(fromCurrency){
    const amount = document.querySelector("#montante");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/28197f69941ed36e7787fc47/latest/${fromCurrency.value}`;
    // fetching api response and returning it with parsing into js obj and in another then method receiving that obj
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value]; // getting user selected TO currency rate
        let totalExRate = (amountVal * exchangeRate).toFixed(2); // multiplying user entered value with selected TO currency rate

        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
        
    }).catch(() =>{ // if user is offline or any other error occured while fetching data then catch function will run
        exchangeRateTxt.innerText = "Something went wrong";
    });
}