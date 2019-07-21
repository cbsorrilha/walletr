import React from 'react'
import { render } from '@testing-library/react'
import FlexContainer from './flex-container';

describe("Test the flex-container component", () => {
  it('should match the snapshots', () => {
    const component = render(<FlexContainer />);
    expect(component).toMatchSnapshot();
  })
});