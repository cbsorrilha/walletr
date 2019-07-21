import React from 'react'
import { render } from '@testing-library/react'
import Title from './title';

describe("Test the title component", () => {
  it('should match the snapshots', () => {
    const component = render(<Title />);
    expect(component).toMatchSnapshot();
  })
});