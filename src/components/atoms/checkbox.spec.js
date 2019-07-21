import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from './checkbox';

describe('Test the checkbox component', () => {
  it('should match the snapshots', () => {
    const component = render(<Checkbox />);
    expect(component).toMatchSnapshot();
  });
});
