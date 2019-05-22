import { connect } from 'react-redux';
import { fetchTweets } from '../actions/tweetsAction';
import Tweets from '../components/tweets/Tweets';
import { getTweets, isTweetsLoading, getTweetsError } from '../selectors/tweets';
import { withFetch } from '../components/withFetch';

const  mapStateToProps = state => ({
  tweets: getTweets(state),
  loading: isTweetsLoading(state),
  error: getTweetsError
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Tweets));

