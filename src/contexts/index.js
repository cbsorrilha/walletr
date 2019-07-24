import React from 'react';
import PricesContext from './price';
import BalancesContext from './balances';

export default function ApplicationContexts({ prices, balances, children }) {
  return (
    <PricesContext.Provider value={prices}>
      <BalancesContext.Provider value={balances}>{children}</BalancesContext.Provider>
    </PricesContext.Provider>
  );
}
