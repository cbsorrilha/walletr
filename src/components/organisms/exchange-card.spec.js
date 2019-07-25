import React from 'react';
import { render } from '@testing-library/react';
import ExchangeCard from './exchange-card';

describe('Test the exchange-card component', () => {
  it('should match the snapshots', () => {
    const component = render(<ExchangeCard balances={null} currencies={['BRL', 'BTC']} title="Negociar Bitcoins" />);
    expect(component).toMatchSnapshot();
  });
});
