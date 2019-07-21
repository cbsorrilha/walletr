import React from 'react'
import { render } from '@testing-library/react'
import Text from './text';

describe("Test the text component", () => {
  it('should match the snapshots', () => {
    const component = render(<Text />);
    expect(component).toMatchSnapshot();
  })
});