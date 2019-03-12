import React from 'react';
import renderer from 'react-test-renderer';
import User from '../users/User';
import { MemoryRouter } from 'react-router-dom';

describe('User', () => {
  it('displays a user', () => {
    const user = {
      id: 1,
      img: 'image.com',
      username: 'user2',
      bio: 'I am a person; I swear',
      tweets: [
        {
          id: 1,
          userId: 1,
          img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
          text: 'twitter you twit'
        },
        {
          id: 2,
          userId: 1,
          img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
          text: 'twitter you twit twit'
        },
        {
          id: 3,
          userId: 1,
          img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
          text: 'twitter you twit twit twitter twit'
        }
      ]
    };

    const tree = renderer.create(
      <MemoryRouter>
        <User {...user} />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
