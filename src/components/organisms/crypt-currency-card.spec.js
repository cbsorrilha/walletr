import React from 'react';
import { render } from '@testing-library/react';
import CryptCurrencyCard from './crypt-currency-card';

describe('Test the crypt-currency-card component', () => {
  it('should match the snapshots', () => {
    const converter = jest.fn();
    const formater = jest.fn();
    const component = render(<CryptCurrencyCard formater={formater} value={0.0} coin="a" converter={converter} />);
    expect(component).toMatchSnapshot();
    expect(converter).toBeCalled();
    expect(converter).toBeCalledWith(0.0);
    expect(formater).toBeCalled();
  });
});
