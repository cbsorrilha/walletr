export const converterFromPrice = price => [
  value => parseFloat(value) * parseFloat(price),
  value => parseFloat(value) / parseFloat(price),
];
// TODO
export function BTCtoBTA(value, btcPrice, btaPrice) {}
// TODO
export function BTAtoBTC(value, btcPrice, btaPrice) {}
