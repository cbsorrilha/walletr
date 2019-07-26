import React from 'react';
import { render } from '@testing-library/react';
import ConverterInput from './converter-input';

describe('Test the converter-input component', () => {
  it('should match the snapshots', () => {
    const component = render(<ConverterInput />);
    expect(component).toMatchSnapshot();
  });
});
