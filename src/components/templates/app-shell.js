import React from 'react';
import Navigation from '../organisms/navigation';
import Wrapper from '../molecules/wrapper';

const AppShell = ({ children, navigation }) => (
  <div>
    <Navigation {...navigation} />
    <Wrapper>{children}</Wrapper>
  </div>
);

export default AppShell;
