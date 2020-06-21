import React from 'react';

import Label from '../../Label/index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Label />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Label />);
  expect(asFragment(render(<Label />))).toMatchSnapshot();
});
