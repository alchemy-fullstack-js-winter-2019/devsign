// The login page has been replaced by Auth0 

import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';
import { MemoryRouter } from 'react-router';

jest.mock('../../services/auth.js');

describe('Login snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
