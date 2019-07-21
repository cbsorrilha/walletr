import React from 'react';
import { render } from '@testing-library/react';
import Card from './card';

describe('Test the card component', () => {
  it('should match the snapshots', () => {
    const component = render(<Card />);
    expect(component).toMatchSnapshot();
  });
});
