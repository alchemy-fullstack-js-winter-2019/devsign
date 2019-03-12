import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';

describe('Home component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Home />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
