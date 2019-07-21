import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

describe('Test the button component', () => {
  it('should match the snapshots', () => {
    const button = render(<Button />);
    expect(button).toMatchSnapshot();
  });
});
