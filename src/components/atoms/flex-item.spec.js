import React from 'react';
import { render } from '@testing-library/react';
import FlexItem from './flex-item';

describe('Test the flex-item component', () => {
  it('should match the snapshots', () => {
    const component = render(<FlexItem />);
    expect(component).toMatchSnapshot();
  });
});
