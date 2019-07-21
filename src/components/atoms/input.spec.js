import React from 'react';
import { render } from '@testing-library/react';
import Input from './input';

describe('Test the input component', () => {
  it('should match the snapshots', () => {
    const component = render(<Input />);
    expect(component).toMatchSnapshot();
  });
});
