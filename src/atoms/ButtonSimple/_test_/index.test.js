import React from 'react';


import { render } from '@testing-library/react';
import ButtonSimple from '../index';

it('it renders', () => {
  render(<ButtonSimple />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<ButtonSimple />);
  expect(asFragment(render(<ButtonSimple />))).toMatchSnapshot();
});
