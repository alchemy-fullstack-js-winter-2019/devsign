import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home component test', () => {
  it('renders the Home component correctly', () => {
    const tree = renderer.create(
      <Home />
    );
    expect(tree).toMatchSnapshot;
  });
});

