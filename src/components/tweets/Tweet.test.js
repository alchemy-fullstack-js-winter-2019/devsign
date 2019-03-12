import React from 'react';
import renderer from 'react-test-renderer';
import Tweet from './Tweet';

describe('Tweet', () => {
  it('displays a tweet', () => {
    const props = {
      tweet: {
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
        text: 'twitter you twit'
      }
    };

    const tree = renderer.create(
      <Tweet {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
