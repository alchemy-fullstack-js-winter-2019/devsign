import React from 'react';
import renderer from 'react-test-renderer';
import Home  from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  it('matches a snapshot', () => {

    const tree = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
