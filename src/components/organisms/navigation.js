import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import Logo from '../atoms/logo';
import Wrapper from '../molecules/wrapper';

const Navigation = ({ children }) => (
  <NavigationWrapper alignItems="center" justify="space-between">
    <Wrapper justify="center">
      <Logo />
      {children}
    </Wrapper>
  </NavigationWrapper>
);

const NavigationWrapper = styled(FlexContainer)`
  height: 3.5rem;
  background-color: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(78, 78, 78, 1);
  margin-bottom: 2rem;
`;

export default Navigation;
