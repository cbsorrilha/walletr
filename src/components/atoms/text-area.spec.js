import React from 'react';
import { render } from '@testing-library/react';
import TextArea from './text-area';

describe('Test the text-area component', () => {
  it('should match the snapshots', () => {
    const component = render(<TextArea />);
    expect(component).toMatchSnapshot();
  });
});
