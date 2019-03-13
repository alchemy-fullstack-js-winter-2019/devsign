import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tweets from '../../components/tweets/Tweets';
import { getTweets } from '../../selectors/tweets';

class TopTweets extends PureComponent {
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

const mapStateToProps = state => ({
  tweets: getTweets(state)
});

export default connect(
  mapStateToProps
)(TopTweets);
