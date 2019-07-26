import React, { useContext } from 'react';
import BalanceContext from '../contexts/balances';
import ExchangeTemplate from '../components/templates/exchange';

export default function Exchange() {
  return <ExchangeTemplate balances={useContext(BalanceContext)} />;
}
