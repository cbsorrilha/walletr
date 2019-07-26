import React from 'react';

const TransactionContext = React.createContext({
  simulateTransaction: () => {},
  makeTransaction: () => {},
});

export default TransactionContext;
