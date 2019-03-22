import { connect } from 'react-redux';
import { fetchTweets } from '../actions/followerTweets';
import { withFetch } from  '../components/withFetch';
import TweetList from '../components/TweetList';
import { getTweets } from '../selectors/tweets';


const mapStateToProps = state => ({
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
)(withFetch(TweetList));
