import React from 'react'
import { render } from '@testing-library/react'
import Centralizer from './centralizer';

describe("Test the centralizer component", () => {
  it('should match the snapshots', () => {
    const component = render(<Centralizer />);
    expect(component).toMatchSnapshot();
  })
});