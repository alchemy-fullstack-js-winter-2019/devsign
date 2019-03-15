import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';


describe('Home Layout', () => {
  it('makes a snapshot', () => {
    const component = renderer.create(
      <Home />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
