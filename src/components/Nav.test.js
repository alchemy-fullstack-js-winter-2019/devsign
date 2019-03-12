import React from 'react';
import Nav from './Nav';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Nav component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
