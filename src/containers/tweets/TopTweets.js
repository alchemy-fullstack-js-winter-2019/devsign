import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tweets from '../../components/tweets/Tweets';

export default class TopTweets extends PureComponent {
  static propTypes = {
    tweets: PropTypes.array.isRequired
  }

  render() {
    return (
      <main>
        <h2>Top Tweets:</h2>
        <Tweets {...this.props} />
      </main>
    );
  }
}
