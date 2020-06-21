import React from 'react';
import { render } from '@testing-library/react';
import RadioButtons from '../index';

it('it renders', () => {
  render(<RadioButtons />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<RadioButtons />);
  expect(asFragment(render(<RadioButtons/>))).toMatchSnapshot();
});
