import React from 'react';
import Title from '../atoms/title';
import GridContainer from '../atoms/grid-container';
import GridItem from '../atoms/grid-item';
import Card from '../atoms/card';
import Centralizer from '../molecules/centralizer';
import ExchangeForm from '../../modules/exchange-form';

export default function ExchangeCard({ title, currencies, balances }) {
  const labels = currencies.indexOf('BRL') !== -1 ? ['Comprar', 'Vender'] : ['Trocar', 'Trocar'];

  return (
    <Card margin={{ top: '1.5rem' }} padding="2rem 1.5rem">
      <Title hierarchy="2">{title}</Title>
      {!balances && (
        <Centralizer height="auto">
          <Title hierarchy="3">Carregando.... :)</Title>
        </Centralizer>
      )}
      {balances && (
        <GridContainer template={{ columns: '1fr 10rem 1fr' }}>
          <GridItem>
            <ExchangeForm
              btnLabel={labels[0]}
              fromCurrency={currencies[0]}
              toCurrency={currencies[1]}
              balances={balances}
            />
          </GridItem>
          <GridItem margin={{ left: '5rem', right: '5rem' }} border="solid grey 1px" />
          <GridItem>
            <ExchangeForm
              btnLabel={labels[1]}
              fromCurrency={currencies[1]}
              toCurrency={currencies[0]}
              balances={balances}
            />
          </GridItem>
        </GridContainer>
      )}
    </Card>
  );
}
