import React, { useEffect, useState } from 'react';
import AppShell from '../components/templates/app-shell';
import PricesContext from '../contexts/price';
import { getBTCPrice, getBTAPrice } from '../services/prices';

export default function App({ children, match }) {
  const [btaPrice, setBtaPrice] = useState({ sell: 0, buy: 0 });
  const [btcPrice, setBtcPrice] = useState({ sell: 0, buy: 0 });

  const links = [
    { active: match.path === "/", label: "Dashboard", to: "/" },
    { active: match.path === "/exchange", label: "Compra e Venda", to: "/exchange" },
    { active: match.path === "/transactions", label: "Extrato", to: "/transactions" }
  ];

  useEffect(() => {

    getBTCPrice().then(prices => {
      setBtaPrice(prices);
    })
    getBTAPrice().then(prices => {
      setBtcPrice(prices);
    })

  }, []);

  return (
    <PricesContext.Provider value={{ btc: btcPrice, bta: btaPrice }}>
      <AppShell navigation={{ links }}>
        {children}
      </AppShell>
    </PricesContext.Provider>
  )
}