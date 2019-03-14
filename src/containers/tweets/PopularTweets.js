import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweets';
import { withFetch } from '../../components/withFetch';
import Tweet from '../../components/tweet/Tweet';
import { getTweets, isTweetsLoading } from '../../selectors/tweets';

const mapStateToProps = state => ({
  tweets: getTweets(state),
  loading: isTweetsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Tweet));
