import useBalances from './useBalances';
import usePrices from '../hooks/usePrices';
import { convertCurrency } from '../helpers/currency';

export default function useExchanger() {
  const [balances, exchange] = useBalances();
  const { btc, bta } = usePrices();
  const currencyDict = {
    BTA: {
      price: parseFloat(bta.sell),
      balance: balances && balances[balances.BTA],
    },
    BRL: {
      price: 1.0,
      balance: balances && balances[balances.BRL],
    },
    BTC: {
      price: parseFloat(btc.sell),
      balance: balances && balances[balances.BTC],
    },
  };

  const makeTransaction = async (fromCurrency, toCurrency, value) => {
    await exchange(
      fromCurrency,
      toCurrency,
      value,
      convertCurrency(currencyDict[fromCurrency].price, currencyDict[toCurrency].price, value)
    );
  };

  const simulateTransaction = (fromCurrency, toCurrency, value) => {
    return convertCurrency(currencyDict[fromCurrency].price, currencyDict[toCurrency].price, value);
  };

  return [balances, { btc, bta }, simulateTransaction, makeTransaction];
}
