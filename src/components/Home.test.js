import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
