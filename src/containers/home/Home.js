import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TweetForm from '../../components/home/TweetForm';
import Tweets from '../../components/tweets/Tweets';


export default class Home extends PureComponent {
  static propTypes = {
    tweet: PropTypes.object.isRequired,
    tweets: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    return (
      <>
        <TweetForm {...this.props} />
        <Tweets {...this.props} />
      </>
    );
  }
}
