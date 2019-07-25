import React from 'react';
import { render } from '@testing-library/react';
import ExchangeForm from './exchange-form';

describe('Test the exchange-form component', () => {
  it('should match the snapshots', () => {
    const component = render(<ExchangeForm />);
    expect(component).toMatchSnapshot();
  });
});
