import React from 'react'
import { render } from '@testing-library/react'
import Wrapper from './wrapper';

describe("Test the wrapper component", () => {
  it('should match the snapshots', () => {
    const component = render(<Wrapper />);
    expect(component).toMatchSnapshot();
  })
});