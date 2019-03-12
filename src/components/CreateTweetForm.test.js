import React from 'react';
import CreateTweetForm from './CreateTweetForm';
import renderer from 'react-test-renderer';

describe('CreateTweetForm component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <CreateTweetForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
