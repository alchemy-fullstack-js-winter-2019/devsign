import React from 'react';
import renderer from 'react-test-renderer';
import Profile  from './Profile';

describe('Profile', () => {
  it('matches a snapshot', () => {

    const tree = renderer.create(
      <Profile />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
