import React from 'react';
import FlexContainer from '../atoms/flex-container';
import FlexItem from '../atoms/flex-item';

export default function Centralizer({ children, height = '100vh' }) {
  return (
    <FlexContainer direction="column" justify="center" height={height}>
      <FlexItem>
        <FlexContainer justify="center">
          <FlexItem>{children}</FlexItem>
        </FlexContainer>
      </FlexItem>
    </FlexContainer>
  );
}
