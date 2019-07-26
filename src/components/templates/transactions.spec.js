import React from 'react';
import { render } from '@testing-library/react';
import Transactions from './transactions';

describe('Test the transactions component', () => {
  it('should match the snapshots', () => {
    const component = render(<Transactions transactions={[]} />);
    expect(component).toMatchSnapshot();
  });
});
