import React from 'react';
import { render } from '@testing-library/react';
import Image from './image';

describe('Test the image component', () => {
  it('should match the snapshots', () => {
    const component = render(<Image />);
    expect(component).toMatchSnapshot();
  });
});
