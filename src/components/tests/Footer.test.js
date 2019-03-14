import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';
import { MemoryRouter } from 'react-router';

describe('Header snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
