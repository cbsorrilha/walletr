import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import PricesContext from './price';
import BalancesContext from './balances';
import TransactionContext from './transactions';

export default function ApplicationContexts({
  prices,
  balances,
  simulateTransaction,
  makeTransaction,
  transactions,
  children,
}) {
  return (
    <ToastProvider>
      <PricesContext.Provider value={prices}>
        <BalancesContext.Provider value={balances}>
          <TransactionContext.Provider value={{ transactions, simulateTransaction, makeTransaction }}>
            {children}
          </TransactionContext.Provider>
        </BalancesContext.Provider>
      </PricesContext.Provider>
    </ToastProvider>
  );
}
