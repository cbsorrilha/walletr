import React from 'react'
import { render } from '@testing-library/react'
import AppShell from './app-shell';

describe("Test the app-shell component", () => {
  it('should match the snapshots', () => {
    const component = render(<AppShell />);
    expect(component).toMatchSnapshot();
  })
});