import React from 'react';
import { render } from '@testing-library/react';
import RealBalanceCard from './real-balance-card';

describe('Test the real-balance-card component', () => {
  it('should match the snapshots', () => {
    const component = render(<RealBalanceCard />);
    expect(component).toMatchSnapshot();
  });
});
