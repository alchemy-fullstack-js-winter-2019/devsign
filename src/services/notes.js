//services/tweets
export const getTweets = () => {
  return Promise.resolve({
    
  });
};
//like a fake fetch

//reducers/tweets
const intialState = {
  tweets:[]
};

//actions/tweets
// same as using the normal middleware
import { createAction } from 
import { getTweets }
import { connect } from "net";

export const [
  fetchTweets,
  FETCH_TWEETS, 
  FETCH_TWEETS_PENDING
] = createAction('FETCH_TWEETS', getTweets);

//containers/tweets/PopularTweets

const mapStateToProps = state => {
  tweets: state.tweets.tweets
};
const mapDispatchToProps = dispatch => {
  fetch () {
    dispatch(fetchTweets())
  }
};

export default connect(