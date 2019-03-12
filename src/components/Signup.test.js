import React from 'react';
import Signup from './Signup';
import renderer from 'react-test-renderer';

describe('Signup component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Signup />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
