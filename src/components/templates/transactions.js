import React, { Fragment } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import compareDesc from 'date-fns/compare_desc';
import ptLocale from 'date-fns/locale/pt';
import Title from '../atoms/title';
import Text from '../atoms/text';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';
import Card from '../atoms/card';
import GridContainer from '../atoms/grid-container';
import GridItem from '../atoms/grid-item';
import ExchangeIndicator from '../molecules/exchange-indicator';
import { currencies } from '../../helpers/currency';

export default function Transactions({ transactions }) {
  const noTransactions = !transactions.length > 0;

  return (
    <Fragment>
      <Title color="#086a2d">Seu extrato</Title>
      <Card margin="1.5rem 0 0 0">
        <FlexContainer direction="column" padding="2rem 1rem">
          {noTransactions && (
            <FlexItem>
              <FlexContainer direction="column">
                <FlexItem>
                  <Title align="center" color="#086a2d">
                    Nada aqui por enquanto.
                  </Title>
                </FlexItem>
                <FlexItem margin="1rem 0 0 0">
                  <Text size="1.3rem" align="center" color="#086a2d">
                    Por que não experimenta comprar algumas bitcoins?
                  </Text>
                </FlexItem>
              </FlexContainer>
            </FlexItem>
          )}
          {!noTransactions && (
            <FlexItem width="100%">
              <GridContainer template={{ columns: '1fr 1fr 1fr 1fr' }}>
                <GridItem padding="1rem" border={{ bottom: 'solid grey 1px' }}>
                  <Text bold>Operação</Text>
                </GridItem>
                <GridItem padding="1rem" border={{ bottom: 'solid grey 1px' }}>
                  <Text bold>Valor</Text>
                </GridItem>
                <GridItem padding="1rem" border={{ bottom: 'solid grey 1px' }}>
                  <Text bold>Valor Convertido</Text>
                </GridItem>
                <GridItem padding="1rem" border={{ bottom: 'solid grey 1px' }}>
                  <Text bold>Data</Text>
                </GridItem>

                {transactions.sort((a, b) => compareDesc(a.time, b.time)).map(transaction => {
                  const { id, fromCurrency, toCurrency, value, convertedValue, time } = transaction;
                  return (
                    <Fragment key={id}>
                      <GridItem padding="1rem" border={{ bottom: 'solid grey 1px' }}>
                        <ExchangeIndicator
                          fromCurrency={currencies[fromCurrency].simbol}
                          toCurrency={currencies[toCurrency].simbol}
                        />
                      </GridItem>
                      <GridItem padding="1rem" border={{ bottom: 'solid grey 1px' }}>
                        <Text bold>
                          {currencies[fromCurrency].simbol} {currencies[fromCurrency].formater(value)}
                        </Text>
                      </GridItem>
                      <GridItem padding="1rem" border={{ bottom: 'solid grey 1px' }}>
                        <Text bold>
                          {currencies[toCurrency].simbol} {currencies[toCurrency].formater(convertedValue)}
                        </Text>
                      </GridItem>
                      <GridItem padding="1rem" border={{ bottom: 'solid grey 1px' }}>
                        <Text bold>há {distanceInWordsToNow(time, { locale: ptLocale, includeSeconds: true })}</Text>
                      </GridItem>
                    </Fragment>
                  );
                })}
              </GridContainer>
            </FlexItem>
          )}
        </FlexContainer>
      </Card>
    </Fragment>
  );
}
