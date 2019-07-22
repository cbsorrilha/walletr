import React from 'react';
import { render } from '@testing-library/react';
import PriceWidget from './price-widget';

describe('Test the price-widget component', () => {
  it('should match the snapshots', () => {
    const component = render(<PriceWidget />);
    expect(component).toMatchSnapshot();
  });
});
