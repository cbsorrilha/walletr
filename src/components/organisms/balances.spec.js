import React from 'react';
import { render } from '@testing-library/react';
import Balances from './balances';

describe('Test the balances component', () => {
  const converters = { btcConverter: () => {}, btaConverter: () => {} };
  it('should match the snapshots without a balance object', () => {
    const component = render(<Balances converters={converters} />);
    expect(component).toMatchSnapshot();
  });

  it('should match the snapshots with a balance object', () => {
    const component = render(<Balances converters={converters} balances={{ BTC: 0.0, BTA: 0.0, BRL: 0.0 }} />);
    expect(component).toMatchSnapshot();
  });
});
