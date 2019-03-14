import React from 'react';
import renderer from 'react-test-renderer';
import LogIn from './LogIn';

describe('Login component test', () => {
  it('renders the Login component correctly', () => {
    const tree = renderer.create(
      <LogIn />
    );
    expect(tree).toMatchSnapshot;
  });
});
