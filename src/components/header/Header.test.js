import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header Layout', () => {
  it('makes a snapshot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
