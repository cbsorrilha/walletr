import React from 'react';
import FlexContainer from '../atoms/flex-container';

export default function Wrapper({ children, ...props }) {
  return (
    <FlexContainer direction="column" width="90%" margin="0 auto" {...props}>
      {children}
    </FlexContainer>
  )
}