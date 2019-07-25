import React from 'react';
import Text from '../atoms/text';
import Input from '../atoms/input';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import GridContainer from '../atoms/grid-container';
import GridItem from '../atoms/grid-item';

export default function ConverterInput({
  onChange,
  toCurrencySimbol,
  value,
  error,
  fromCurrency,
  fromCurrencySimbol,
  convertedResult,
}) {
  return (
    <GridContainer template={{ columns: '1fr 5fr 1fr 4fr' }} margin="1rem 0" height="auto">
      <GridItem margin="0 .50rem 0 0">
        <Text size="lg">{fromCurrencySimbol}</Text>
      </GridItem>
      <GridItem>
        <FlexContainer direction="column">
          <FlexItem>
            <Input
              width="13.5rem"
              error={error}
              name={`amount-${fromCurrency}`}
              type="number"
              value={value}
              onChange={onChange}
            />
          </FlexItem>
          <FlexItem margin=".45rem 0 0 0" height=".5rem">
            {error && (
              <Text size="xs" color="#F00">
                {error}
              </Text>
            )}
          </FlexItem>
        </FlexContainer>
      </GridItem>
      <GridItem>
        <FlexItem margin="0 0 0 1rem">
          <Text align="center" size="lg">
            ➡
          </Text>
        </FlexItem>
      </GridItem>
      <GridItem grow="1" margin="0 0 0 1rem">
        <Text size="lg">
          {toCurrencySimbol} {convertedResult}
        </Text>
      </GridItem>
    </GridContainer>
  );
}
