import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/flex-container';
import Logo from '../atoms/logo';
import Wrapper from '../molecules/wrapper';
import NavigationLink from '../molecules/navigation-link';

const Navigation = ({ links = [] }) => (
  <NavigationWrapper alignItems="center" justify="space-between">
    <Wrapper justify="center" direction="row" alignItems="center">
      <Logo />
      <FlexContainer margin={{ left: '1.5rem' }} alignItems="center">
        {links.map(({ ...props }, i) => <NavigationLink key={i} {...props} />)}
      </FlexContainer>
    </Wrapper>
  </NavigationWrapper>
);

const NavigationWrapper = styled(FlexContainer)`
  height: 3.5rem;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(78, 78, 78, 1);
  margin-bottom: 2rem;
`;

export default Navigation;
