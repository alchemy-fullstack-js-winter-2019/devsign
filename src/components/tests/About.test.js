import React from 'react';
import renderer from 'react-test-renderer';
import About from '../About';
import { MemoryRouter } from 'react-router';

describe('About snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
