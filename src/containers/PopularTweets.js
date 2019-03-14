import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTweets } from '../selectors/tweetSelector';
import { fetchTweets } from '../actions/tweetsAction';

import Tweets from '../components/Tweets';


class PopularTweets extends PureComponent {


  componentDidMount() {
    // this.props.fetch();
  }

  render() {
    return (
      <>
      <Tweets {...this.props} />;
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
