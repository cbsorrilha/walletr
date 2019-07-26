import React, { useContext } from 'react';
import DashboardTemplate from '../components/templates/dashboard';
import BalanceContext from '../contexts/balances';
import PricesContext from '../contexts/price';
import { convertCurrency } from '../helpers/currency';

export default function Dashboard() {
  const balances = useContext(BalanceContext);
  const { btc, bta } = useContext(PricesContext);
  const btaConverter = value => convertCurrency(bta.sell, 1.0, value);
  const btcConverter = value => convertCurrency(btc.sell, 1.0, value);

  return <DashboardTemplate converters={{ btaConverter, btcConverter }} balances={balances} />;
}
