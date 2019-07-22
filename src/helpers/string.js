export function formatMoneyString(amount) {
  return `R$ ${parseFloat(amount).toFixed(2)}`;
}
