import React from 'react';
import AppShell from '../components/templates/app-shell';
import ApplicationContexts from '../contexts/';
import PriceWidget from './prices';
import usePrices from '../hooks/usePrices';
import useBalances from '../hooks/useBalances';

const getLinks = location => [
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

export default function App({ children, location }) {
  return (
    <ApplicationContexts balances={useBalances()} prices={usePrices()}>
      <AppShell navigation={{ links: getLinks(location), widget: () => <PriceWidget /> }}>{children}</AppShell>
    </ApplicationContexts>
  );
}
