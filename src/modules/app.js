import React from 'react';
import AppShell from '../components/templates/app-shell';
import ApplicationContexts from '../contexts/';
import PriceWidget from './prices';
import useExchanger from '../hooks/useExchanger';

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
  const [balances, prices, simulateTransaction, makeTransaction] = useExchanger();

  return (
    <ApplicationContexts
      simulateTransaction={simulateTransaction}
      makeTransaction={makeTransaction}
      balances={balances}
      prices={prices}
    >
      <AppShell
        navigation={{
          links: getLinks(location),
          widget: () => <PriceWidget />,
        }}
      >
        {children}
      </AppShell>
    </ApplicationContexts>
  );
}
