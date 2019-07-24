import React, { useContext } from 'react';
import DashboardTemplate from '../components/templates/dashboard';
import BalanceContext from '../contexts/balances';
import PricesContext from '../contexts/price';
import { converterFromPrice } from '../helpers/currency';

export default function Dashboard() {
  const balances = useContext(BalanceContext);
  const { btc, bta } = useContext(PricesContext);
  const [btaConverter] = converterFromPrice(bta.sell);
  const [btcConverter] = converterFromPrice(btc.sell);

  return <DashboardTemplate converters={{ btaConverter, btcConverter }} balances={balances} />;
}
