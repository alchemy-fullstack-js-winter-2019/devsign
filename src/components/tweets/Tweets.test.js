import React from 'react';
import renderer from 'react-test-renderer';
import Tweets from './Tweets';
import { MemoryRouter } from 'react-router-dom';

describe('Tweets', () => {
  it('displays a tweet', () => {
    const tweets = [
      {
        id: 1,
        userId: 1,
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
        text: 'twitter you twit'
      },
      {
        id: 2,
        userId: 2,
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
        text: 'twitter you twit twit'
      },
      {
        id: 3,
        userId: 3,
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
        text: 'twitter you twit twit twitter twit'
      }
    ];

    const tree = renderer.create(
      <MemoryRouter>
        <Tweets tweets={tweets} />
      </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
