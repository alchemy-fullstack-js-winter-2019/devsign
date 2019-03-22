import { createAction } from 'promise-middleware-redux';
import { getRecentTweets } from '../services/tweets';

// export const FETCH_RECENT_TWEETS = 'FETCH_RECENT_TWEETS';
// export const fetchTweets = () => ({
//   type: FETCH_RECENT_TWEETS,
//   payload: getRecentTweets
// });

export const [
  fetchTweets,
  FETCH_RECENT_TWEETS,
  FETCH_TWEETS_PENDING

] = createAction('FETCH_RECENT_TWEETS', getRecentTweets);
