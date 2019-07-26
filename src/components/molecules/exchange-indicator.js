import React from 'react';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import Text from '../atoms/text';

export default function ExchangeIndicator({ fromCurrency, toCurrency }) {
  return (
    <FlexContainer alignItems="center">
      <FlexItem>
        <Text color="#086a2d" bold>
          {fromCurrency}
        </Text>
      </FlexItem>
      <FlexItem margin="0 0 0 1rem">
        <Text color="#086a2d" align="center" size="lg">
          ➡
        </Text>
      </FlexItem>
      <FlexItem margin="0 0 0 1rem">
        <Text color="#086a2d" bold>
          {toCurrency}
        </Text>
      </FlexItem>
    </FlexContainer>
  );
}
