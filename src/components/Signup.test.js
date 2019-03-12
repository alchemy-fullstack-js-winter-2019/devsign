import React from 'react';
import renderer from 'react-test-renderer';
import Signup from './Signup.js';

describe('Signup Snapshot', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Signup />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
