import React, { useEffect, useState } from 'react';
import AppShell from '../components/templates/app-shell';
import PricesContext from '../contexts/price';
import { getBTCPrice, getBTAPrice } from '../services/prices';
import PriceWidget from './prices';

const useCoin = name => {
  const [coin, setter] = useState({ sell: 0, buy: 0, name });
  const coinSetter = payload => {
    setter({ ...payload, name });
  };
  return [coin, coinSetter];
};

export default function App({ children, location }) {
  const [btaPrice, setBtaPrice] = useCoin('br');
  const [btcPrice, setBtcPrice] = useCoin('₿');

  const links = [
    { active: location.pathname === '/', label: 'Dashboard', to: '/' },
    {
      active: location.pathname === '/exchange',
      label: 'Compra e Venda',
      to: '/exchange',
    },
    {
      active: location.pathname === '/transactions',
      label: 'Extrato',
      to: '/transactions',
    },
  ];

  useEffect(() => {
    getBTCPrice().then(prices => {
      setBtcPrice(prices);
    });
    getBTAPrice().then(prices => {
      setBtaPrice(prices);
    });
  }, []);

  return (
    <PricesContext.Provider value={{ btc: btcPrice, bta: btaPrice }}>
      <AppShell navigation={{ links, widget: () => <PriceWidget /> }}>{children}</AppShell>
    </PricesContext.Provider>
  );
}
