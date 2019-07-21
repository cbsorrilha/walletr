import React from 'react';
import styled from 'styled-components';
import Centralizer from '../molecules/centralizer';
import Title from '../atoms/title';
import Text from '../atoms/text';
import FlexContainer from '../atoms/flex-container';

export default function ErrorPage({ message, subMessage }) {
  return (
    <Centralizer>
      <JumboTitle align="center">Ops!</JumboTitle>
      <FlexContainer margin={{ top: '2rem' }} direction="column">
        <Text align="center">{message}</Text>
        <Text align="center">{subMessage}</Text>
      </FlexContainer>
    </Centralizer>
  );
}

const JumboTitle = styled(Title)`
  font-size: 8rem;
`;
