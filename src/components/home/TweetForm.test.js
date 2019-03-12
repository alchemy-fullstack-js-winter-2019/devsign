import React from 'react';
import renderer from 'react-test-renderer';
import TweetForm from './TweetForm';

describe('Tweet Form', () => {
  it('displays tweet submission form', () => {
    const props = {
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      tweetText: 'I am twitting'
    };

    const tree = renderer.create(
      <TweetForm {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
