import React, { Fragment } from 'react';
import Card from '../atoms/card';
import Title from '../atoms/title';
import Balances from '../organisms/balances';

export default function Dashboard({ balances, converters }) {
  return (
    <Fragment>
      <Title color="#086a2d">Olá, Pedro!</Title>
      <Card margin={{ top: '1.5rem' }} padding="2rem 1.5rem">
        <Title hierarchy="3">Suas carteiras</Title>
        <Balances balances={balances} converters={converters} />
      </Card>
    </Fragment>
  );
}
