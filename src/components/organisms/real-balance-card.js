import React from 'react';
import Text from '../atoms/text';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import { formatMoneyString } from '../../helpers/string';

export default function RealBalancecard({ value }) {
  return (
    <FlexContainer alignItems="baseline">
      <FlexItem>
        <Text size="1.5rem" color="#1cee6c">
          R$
        </Text>
      </FlexItem>
      <FlexItem>
        <Text size="3rem" color="#1cee6c">
          {formatMoneyString(value, '')}
        </Text>
      </FlexItem>
    </FlexContainer>
  );
}
