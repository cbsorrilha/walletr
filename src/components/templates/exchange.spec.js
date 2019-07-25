import React from 'react';
import { render } from '@testing-library/react';
import Exchange from './exchange';

describe('Test the exchange component', () => {
  it('should match the snapshots', () => {
    const component = render(<Exchange />);
    expect(component).toMatchSnapshot();
  });
});
