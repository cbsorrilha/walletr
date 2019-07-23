import React from 'react';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import Text from '../atoms/text';
import { formatMoneyString } from '../../helpers/string';

export default function PriceWidget({ name, buy, sell }) {
  return (
    <FlexContainer justify="flex-end">
      <FlexContainer width="30%" alignItems="center">
        <FlexItem margin={{ right: '.5rem' }}>
          <Text size="22px" color="#086a2d" align="right">
            {name}
          </Text>
        </FlexItem>

        <FlexContainer>
          <FlexContainer justify="center" direction="column">
            <Text size="12px" color="#086a2d">
              Compra
            </Text>
            <Text size="12px" color="#086a2d">
              Venda
            </Text>
          </FlexContainer>
          <FlexContainer justify="center" direction="column">
            <Text size="12px" color="#086a2d">
              {formatMoneyString(buy)}
            </Text>
            <Text size="12px" color="#086a2d">
              {formatMoneyString(sell)}
            </Text>{' '}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
