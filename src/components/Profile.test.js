import React from 'react';
import Profile from './Profile';
import renderer from 'react-test-renderer';

describe('Profile component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Profile />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
