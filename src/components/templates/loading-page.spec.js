import React from 'react';
import { render } from '@testing-library/react';
import LoadingPage from './loading-page';

describe('Test the loading-page component', () => {
  it('should match the snapshots', () => {
    const component = render(<LoadingPage />);
    expect(component).toMatchSnapshot();
  });
});
