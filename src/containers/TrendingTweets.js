import { connect } from 'react-redux';
import { getTweets, tweetsLoading } from '../selectors/tweetSelector';
import { fetchTweets } from '../actions/tweetsAction';
import Tweets from '../components/Tweets';
import { withFetch } from '../components/';


const mapStateToProps = state => ({
  tweet: getTweets(state),
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
)(withFetch(Tweets));
