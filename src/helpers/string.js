export function formatMoneyString(amount, coin = 'R$') {
  return `${coin} ${parseFloat(amount).toFixed(2)}`;
}
