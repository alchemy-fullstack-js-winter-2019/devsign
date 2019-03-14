import { connect } from 'react-redux';
import Tweets from '../components/tweets/Tweets';
import { getMyTweets, isLoading } from '../selectors/tweets';
import { fetchMyTweets } from '../actions/tweets';

import { withFetch } from '../components/withFetch';

const mapStateToProps = state => ({
  tweets: getMyTweets(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchMyTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Tweets));
