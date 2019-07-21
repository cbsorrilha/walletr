import React from 'react'
import { render } from '@testing-library/react'
import LoadingIndicator from './loading-indicator';

describe("Test the loading-indicator component", () => {
  it('should match the snapshots', () => {
    const component = render(<LoadingIndicator />);
    expect(component).toMatchSnapshot();
  })
});