import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTweets } from '../selectors/tweetSelector';
import { fetchTweets } from '../actions/tweetsAction';
import PropTypes from 'prop-types';
import Tweets from '../components/Tweets';


class PopularTweets extends PureComponent {
  static propTypes ={
    tweets: PropTypes.array.isRequired
  };

  componentDidMount() {

  }

  render() {
    return (
      <>
      <Tweets />
      </>
    );
  }

}

const mapStateToProps = state => ({
  tweet: getTweets(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularTweets);
