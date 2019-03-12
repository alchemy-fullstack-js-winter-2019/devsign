import React from 'react';
import Signup from './Signup.js';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Signup component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
