import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './dashboard';

describe('Test the dashboard component', () => {
  const converters = { btcConverter: () => {}, btaConverter: () => {} };

  it('should match the snapshots', () => {
    const component = render(<Dashboard converters={converters} />);
    expect(component).toMatchSnapshot();
  });
});
