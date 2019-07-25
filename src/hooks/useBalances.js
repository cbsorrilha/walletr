import { useEffect, useState } from 'react';
import { getBalances, setBalance } from '../services/balance';

export default function useBalances() {
  const [balances, updateBalances] = useState(null);

  const exchange = async (fromKey, toKey, value, convertedValue) => {
    try {
      const newBalances = {
        ...balances,
        [fromKey]: parseFloat(balances[fromKey]) - parseFloat(value),
        [toKey]: parseFloat(balances[toKey]) + parseFloat(convertedValue),
      };

      await setBalance(newBalances);

      updateBalances(newBalances);
    } catch (error) {
      console.log('exchange error', error);
      updateBalances('error');
    }
  };

  useEffect(() => {
    getBalances().then(balances => {
      updateBalances(balances);
    });
  }, []);

  return [balances, exchange];
}
