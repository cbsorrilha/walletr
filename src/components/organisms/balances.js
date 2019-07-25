import React from 'react';
import Text from '../atoms/text';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import RealBalanceCard from './real-balance-card';
import CryptCurrencyCard from './crypt-currency-card';
import { currencies } from '../../helpers/currency';

export default function Balances({ balances, converters }) {
  const { btcConverter, btaConverter } = converters;
  const { BRL, BTC, BTA } = currencies;

  if (!balances) {
    return <Text>Carregando... :)</Text>;
  }

  return (
    <FlexContainer margin={{ top: '1.5rem' }} alignItems="flex-end" justify="space-around">
      <FlexItem>
        <RealBalanceCard value={BRL.formater(balances.BRL)} />
      </FlexItem>
      <FlexItem height="5rem" border="solid grey 1px" />
      <FlexItem>
        <CryptCurrencyCard formater={BTC.formater} converter={btcConverter} coin="₿" value={balances.BTC} />
      </FlexItem>
      <FlexItem height="5rem" border="solid grey 1px" />
      <FlexItem>
        <CryptCurrencyCard formater={BTA.formater} converter={btaConverter} coin="br" value={balances.BTA} />
      </FlexItem>
    </FlexContainer>
  );
}
