import React from 'react';
import renderer from 'react-test-renderer';
import LoginSignUp  from './LoginSignUp';

describe('Login', () => {
  it('matches a snapshot', () => {

    const tree = renderer.create(
      <LoginSignUp />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
