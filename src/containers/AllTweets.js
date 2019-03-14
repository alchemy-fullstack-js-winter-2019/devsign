import { connect } from 'react-redux';
import { fetchTweets } from '../actions/tweetsAction';
import Tweets from '../components/tweets/Tweets';
import { getTweets } from '../selectors/tweets';
import { withFetch } from '../components/withFetch';

const  mapStateToProps = state => ({
  tweets: getTweets(state)
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

