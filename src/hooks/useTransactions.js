import { useState, useEffect } from 'react';
import { createTransaction, getTransactions } from '../services/transactions';

export default function useTransactions() {
  const [transactions, updateTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(data => {
      console.log('useEffect', data);

      if (data.total_rows > 0) {
        return updateTransactions(data.rows.reduce((stack, next) => [...stack, { ...next.doc, id: next.id }], []));
      }

      return updateTransactions([]);
    });
  }, []);

  const saveTransactions = async (fromCurrency, toCurrency, value, convertedValue) => {
    try {
      const newTransaction = {
        fromCurrency,
        toCurrency,
        value,
        convertedValue,
        time: new Date(),
      };

      await createTransaction(newTransaction);

      updateTransactions([...transactions, newTransaction]);
    } catch (error) {
      console.log(error);
    }
  };
  return [transactions, saveTransactions];
}
