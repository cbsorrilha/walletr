import React from 'react'
import { render } from '@testing-library/react'
import GridContainer from './grid-container';

describe("Test the grid-container component", () => {
  it('should match the snapshots', () => {
    const component = render(<GridContainer />);
    expect(component).toMatchSnapshot();
  })
});