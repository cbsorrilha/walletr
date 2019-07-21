import React from 'react'
import { render } from '@testing-library/react'
import GridItem from './grid-item';

describe("Test the grid-item component", () => {
  it('should match the snapshots', () => {
    const component = render(<GridItem />);
    expect(component).toMatchSnapshot();
  })
});