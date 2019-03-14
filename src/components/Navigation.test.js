import React from 'react';
import Navigation from './Navigation';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
