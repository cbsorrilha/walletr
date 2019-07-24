import React from 'react';
import Text from '../atoms/text';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import { formatMoneyString } from '../../helpers/string';

export default function CryptCurrencyCard({ value, coin, converter }) {
  return (
    <FlexContainer direction="column">
      <FlexContainer height="auto" justify="flex-end" alignItems="baseline">
        <FlexItem width="auto" margin={{ right: '.5rem' }}>
          <Text size="1rem" color="#1cee6c">
            {coin}
          </Text>
        </FlexItem>
        <FlexItem>
          <Text size="1rem" color="#1cee6c">
            {value}
          </Text>
        </FlexItem>
      </FlexContainer>
      <FlexContainer height="auto" alignItems="baseline">
        <FlexItem width="auto" margin={{ right: '.5rem' }}>
          <Text size="1.5rem" color="#1cee6c">
            R$
          </Text>
        </FlexItem>
        <FlexItem>
          <Text size="3rem" color="#1cee6c">
            {formatMoneyString(converter(value), '')}
          </Text>
        </FlexItem>
      </FlexContainer>
    </FlexContainer>
  );
}
