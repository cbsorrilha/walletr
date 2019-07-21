import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from './error-page';

describe('Test the error-page component', () => {
  it('should match the snapshots', () => {
    const component = render(<ErrorPage />);
    expect(component).toMatchSnapshot();
  });
});
