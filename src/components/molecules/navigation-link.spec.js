import React from 'react';
import { render } from '@testing-library/react';
import NavigationLink from './navigation-link';

describe('Test the navigation-link component', () => {
  it('should match the snapshots', () => {
    const component = render(<NavigationLink />);
    expect(component).toMatchSnapshot();
  });
});
