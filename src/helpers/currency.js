export const convertCurrency = (fromCurrency, toCurrency, value) => (fromCurrency * value) / toCurrency;

export const currencies = {
  BRL: {
    formater: value => parseFloat(value).toFixed(2),
    simbol: 'R$',
    initialValue: 50.0,
    validate: balance => value => {
      if (value < 50.0 && value > 0) {
        return 'O valor não pode ser menor que R$ 50,00';
      }

      if (value > balance) {
        return 'Saldo insuficiente';
      }

      return null;
    },
  },
  BTC: {
    formater: value => parseFloat(value).toFixed(4),
    simbol: '₿',
    initialValue: 0.0,
    validate: balance => value => {
      if (value < 0.001 && value > 0) {
        return 'O valor não pode ser menor que  ₿ 0,001';
      }

      if (value > balance) {
        return 'Saldo insuficiente';
      }

      return null;
    },
  },
  BTA: {
    formater: value => parseFloat(value).toFixed(2),
    simbol: 'br',
    initialValue: 0.0,
    validate: balance => value => {
      if (value < 10 && value > 0) {
        return 'O valor não pode ser menor que  br 10,00';
      }

      if (value > balance) {
        return 'Saldo insuficiente';
      }

      return null;
    },
  },
};
