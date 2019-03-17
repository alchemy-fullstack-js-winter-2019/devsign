import {
  getTweets
} from './tweets';

describe('selectors', () => {
  let state = null;

  beforeEach(() => {
    state = {
      tweets: {
        tweets: [
          {
            id: 1,
            user: 1,
            img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
            text: 'twitter you twit twit'
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
      }
    };
  });

  it('gets a list of tweets', () => {
    expect(getTweets(state)).toEqual([
      {
        id: 1,
        user: 1,
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
        text: 'twitter you twit twit'
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
    ]);
  });
});
