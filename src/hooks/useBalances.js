import { useEffect, useState } from 'react';
import { getBalances } from '../services/balance';

export default function usePrices() {
  const [balances, setBalances] = useState(null);

  useEffect(() => {
    getBalances().then(balances => {
      setBalances(balances);
    });
  }, []);

  return balances;
}
