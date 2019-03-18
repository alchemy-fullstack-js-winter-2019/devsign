import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTweets, tweetsLoading } from '../selectors/tweetSelector';
import { fetchTweets } from '../actions/tweetsAction';
import Tweets from '../components/Tweets';
// import { withFetch } from '../components/';
import PropTypes from 'prop-types';

class TrendingTweet extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Tweets {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  tweets: getTweets(state),
  loading: tweetsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingTweet); 
