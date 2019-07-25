import React from 'react';
import Text from '../atoms/text';
import Link from '../atoms/link';
import Button from '../atoms/button';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import ConverterInput from '../molecules/converter-input';

export default function ExchangeFormTemplate({
  btnLabel,
  sending,
  balance,
  fromCurrency,
  fromCurrencySimbol,
  toCurrencySimbol,
  value,
  error,
  convertedResult,
  allOfBalance,
  onChange,
  onSubmit,
}) {
  return (
    <FlexContainer margin="2rem 0 0 0">
      <FlexItem width="100%" maxWidth="40rem">
        <form onSubmit={onSubmit}>
          <FlexItem>
            <FlexContainer>
              <FlexItem>
                <Text size="sm">Saldo: {`${fromCurrencySimbol} ${balance}`}</Text>
              </FlexItem>
              <FlexItem margin="0 0 0 .5rem">
                <Link onClick={allOfBalance}>Tudo</Link>
              </FlexItem>
            </FlexContainer>
          </FlexItem>
          <ConverterInput
            onChange={onChange}
            toCurrencySimbol={toCurrencySimbol}
            value={value}
            fromCurrency={fromCurrency}
            fromCurrencySimbol={fromCurrencySimbol}
            error={error}
            convertedResult={convertedResult}
          />
          <Button disabled={!!error || sending} variant="primary" type="submit">
            {btnLabel}
          </Button>
        </form>
      </FlexItem>
    </FlexContainer>
  );
}
