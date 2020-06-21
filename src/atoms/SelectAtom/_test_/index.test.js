import React from 'react';
import SelectAtom from '../../SelectAtom/index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<SelectAtom />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<SelectAtom />);
  expect(asFragment(render(<SelectAtom />))).toMatchSnapshot();
});
