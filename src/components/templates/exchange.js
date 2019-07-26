import React, { Fragment } from 'react';
import Title from '../atoms/title';
import ExchangeCard from '../organisms/exchange-card';

export default function Exchange({ balances }) {
  return (
    <Fragment>
      <Title color="#086a2d">Compra e Venda</Title>
      <ExchangeCard balances={balances} currencies={['BRL', 'BTC']} title="Negociar Bitcoins" />
      <ExchangeCard balances={balances} currencies={['BRL', 'BTA']} title="Negociar Britas" />
      <ExchangeCard balances={balances} currencies={['BTA', 'BTC']} title="Trocar Britas por Bitcoins" />
    </Fragment>
  );
}
