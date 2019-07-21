import React from 'react';
import { render } from '@testing-library/react';
import Link from './link';

describe('Test the link component', () => {
  it('should match the snapshots', () => {
    const component = render(<Link />);
    expect(component).toMatchSnapshot();
  });
});
