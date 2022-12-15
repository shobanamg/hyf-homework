const currencySelector1 = document.querySelector(".select-one");
const currencySelector2 = document.querySelector(".select-two");
const inputAmount = document.querySelector(".input-amount");
const outputAmount = document.querySelector(".output-amount");
const convertButton = document.querySelector(".convert-button");

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
    currencySelector1.innerHTML += `<option value=${currency}>${currency}</option>)`;
    currencySelector2.innerHTML += `<option value=${currency}>${currency}</option>)`;
  });

  const allOptions1 = currencySelector1.querySelectorAll("option");
  allOptions1.forEach((option) => {
    if (option.value === "EUR") option.selected = true;
  });
  const allOptions2 = currencySelector2.querySelectorAll("option");
  allOptions2.forEach((option) => {
    if (option.value === "DKK") option.selected = true;
  });
};

updateCurrencyDropdown();

convertButton.addEventListener("click", () => {
  let fromCurrency = currencySelector1.value;
  let toCurrency = currencySelector2.value;
  let amount = inputAmount.value;

  if (fromCurrency !== toCurrency) {
    convert(fromCurrency, toCurrency, amount);
  } else {
    alert("These are the same currency, please choose different currencies");
  }
});

const convert = async (fromCurrency, toCurrency, amount) => {
  try {
    const data = await getCurrenciesAndRates(fromCurrency);
    const rate = data.rates[toCurrency];
    outputAmount.innerHTML = `${rate * amount} ${toCurrency}`;
  } catch (err) {
    console.error(err);
    return "something went wrong";
  }
};
