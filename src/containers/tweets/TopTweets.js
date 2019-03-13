import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tweets from '../../components/tweets/Tweets';

export default class TopTweets extends PureComponent {
  static propTypes = {
    tweets: PropTypes.array.isRequired
  }

  render() {
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
    
    const props = { tweets };

    return (
      <main>
        <h2>Top Tweets:</h2>
        <Tweets {...props} />
      </main>
    );
  }
}
