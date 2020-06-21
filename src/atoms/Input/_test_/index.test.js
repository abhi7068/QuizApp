import React from 'react';

import Input from '../../Input/index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Input />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Input />);
  expect(asFragment(render(<Input />))).toMatchSnapshot();
});
