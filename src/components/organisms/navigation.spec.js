import React from 'react'
import { render } from '@testing-library/react'
import Navigation from './navigation';

describe("Test the navigation component", () => {
  it('should match the snapshots', () => {
    const component = render(<Navigation />);
    expect(component).toMatchSnapshot();
  })
});