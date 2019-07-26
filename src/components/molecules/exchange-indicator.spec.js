import React from 'react';
import { render } from '@testing-library/react';
import ExchangeIndicator from './exchange-indicator';

describe('Test the exchange-indicator component', () => {
  it('should match the snapshots', () => {
    const component = render(<ExchangeIndicator />);
    expect(component).toMatchSnapshot();
  });
});
