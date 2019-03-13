import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TweetForm from '../../components/home/TweetForm';
import Tweets from '../../components/tweets/Tweets';


export default class Home extends PureComponent {
  static propTypes = {
    tweet: PropTypes.object,
    tweets: PropTypes.array,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
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

    const props = {
      tweetText: 'I is a twit',
      tweets,
    };

    return (
      <main>
        <TweetForm {...props} />
        <Tweets {...props} />
      </main>
    );
  }
}
