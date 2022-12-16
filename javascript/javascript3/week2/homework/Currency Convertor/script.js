const currencySelector1 = document.querySelector(".select-one");
const currencySelector2 = document.querySelector(".select-two");
const inputAmount = document.querySelector(".input-amount");
const outputAmount = document.querySelector(".output-amount");
const convertButton = document.querySelector(".convert-button");
const refreshButton = document.querySelector(".refresh-button");
const result = document.querySelector(".result");

const BASE_URL = "https://open.er-api.com";
const getCurrenciesAndRates = async (fromCurrency) => {
  try {
    const response = await fetch(`${BASE_URL}/v6/latest/${fromCurrency}`);
    if (response.status !== 200) {
      return "something went wrong";
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const updateCurrencyDropdown = async () => {
  const ratesAndCurrencies = await getCurrenciesAndRates("USD");
  const currencies = Object.keys(ratesAndCurrencies.rates);
  currencies.forEach((currency) => {
    currencySelector1.innerHTML += `<option value=${currency} selected=${currency === "EUR"}>${currency}</option>)`;
    currencySelector2.innerHTML += `<option value=${currency} selected=${currency === "DKK"}>${currency}</option>)`;
  });

};

updateCurrencyDropdown();

convertButton.addEventListener("click", () => {
  let fromCurrency = currencySelector1.value;
  let toCurrency = currencySelector2.value;
  let amount = inputAmount.value;
  if (fromCurrency !== toCurrency && amount !== "") {
    convert(fromCurrency, toCurrency, amount);
  } else {
    alert("Please enter the valid details");
  }
});

const convert = async (fromCurrency, toCurrency, amount) => {
  try {
    const data = await getCurrenciesAndRates(fromCurrency);
    const rate = data.rates[toCurrency];
    outputAmount.innerHTML = `${rate * amount}`;
    result.innerHTML = `${amount} ${fromCurrency} =
     ${rate * amount} ${toCurrency}`;
  } catch (err) {
    console.error(err);
    return "something went wrong";
  }
};

refreshButton.addEventListener("click", () => location.reload());
