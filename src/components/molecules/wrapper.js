import React from 'react';
import FlexContainer from '../atoms/flex-container';

export default function Wrapper({ children, direction = 'column', width = '90%', ...props }) {
  return (
    <FlexContainer direction={direction} width={width} margin="0 auto" {...props}>
      {children}
    </FlexContainer>
  );
}
