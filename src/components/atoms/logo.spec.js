import React from 'react'
import { render } from '@testing-library/react'
import Logo from './logo';

describe("Test the logo component", () => {
  it('should match the snapshots', () => {
    const component = render(<Logo />);
    expect(component).toMatchSnapshot();
  })
});