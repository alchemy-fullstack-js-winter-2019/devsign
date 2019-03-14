import React from 'react';
import renderer from 'react-test-renderer';
import About from './About';
import { MemoryRouter } from 'react-router-dom';

describe('About', () => {
  it('renders About component', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot;
  });
});
