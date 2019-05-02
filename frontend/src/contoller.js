import * as model from './model.js';

export const convert = () => {
  const fromAmount = parseFloat(document.getElementById('fromAmount').value);
  model.setFromAmount(fromAmount);
  model.convert();
  document.getElementById('toAmount').value = model.toAmount;
};

document.getElementById("convert").onclick = convert;
document.getElementById('fromAmount').value = model.fromAmount;
document.getElementById('toAmount').value = model.toAmount;