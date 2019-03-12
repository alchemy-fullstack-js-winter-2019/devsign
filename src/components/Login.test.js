import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

describe('Login', () => {
  it('renders Login component', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot;
  });
});
