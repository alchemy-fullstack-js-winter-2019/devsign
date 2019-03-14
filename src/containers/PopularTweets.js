import { connect } from 'react-redux';
import Tweets from '../components/tweets/Tweets';
import { getTweets, isloading } from '../selectors/tweets';
import { fetchTweets } from '../actions/tweets';
import { withFetch } from '../components/withFetch';

const mapStateToProps = state => ({
  tweets: getTweets(state),
  loading: isloading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Tweets));
