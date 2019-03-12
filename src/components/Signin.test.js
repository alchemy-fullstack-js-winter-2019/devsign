import React from 'react';
import Signin from './Signin';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Signin component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Signin />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
