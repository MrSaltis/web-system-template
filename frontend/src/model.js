export let fromAmount = 0;
export let toAmount = 0;
let rate = 0;

export const setFromAmount = (newFromAmount) => fromAmount = newFromAmount;

export const convert = () => {
    fetch('https://api.exchangeratesapi.io/latest?symbols=USD')
    .then(res => res.json())
    .then(data => {
        rate = data.rates.USD;
    });
  toAmount = fromAmount * rate;
};