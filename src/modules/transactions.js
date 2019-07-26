import React, { useContext } from 'react';
import TransactionContext from '../contexts/transactions';
import TransactionsTemplate from '../components/templates/transactions';

export default function Transactions() {
  const { transactions } = useContext(TransactionContext);
  return <TransactionsTemplate transactions={transactions} />;
}
