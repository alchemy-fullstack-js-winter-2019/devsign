import React from 'react';
import renderer from 'react-test-renderer';
import SignForm from './SignForm';

describe('Sign Form', () => {
  it('displays registration form', () => {
    const props = {
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      username: 'user123',
      password: 'passittotheword',
      signType: 'Sign In'
    };

    const tree = renderer.create(
      <SignForm {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
