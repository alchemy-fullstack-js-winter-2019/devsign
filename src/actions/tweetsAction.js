import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/tweets';

// export const FETCH_TWEETS = 'FETCH_TWEETS';
// export const fetchTweets = () => ({
//   type: FETCH_TWEETS,
//   // pendingType: FETCH_TWEETS_PENDING,
//   payload: getTweets
// });

export const [
  fetchTweets,
  FETCH_TWEETS,
  FETCH_TWEETS_PENDING
] = createAction('FETCH_TWEETS', getTweets);

export const CREATE_TWEET = 'CREATE_TWEET';
export const createTweet = tweet => ({
  type: CREATE_TWEET,
  payload: tweet
});
