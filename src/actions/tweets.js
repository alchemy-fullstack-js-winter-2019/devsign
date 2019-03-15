import { getTweets } from '../services/tweets.js';

export const FETCH_TWEETS = 'FETCH_TWEETS';
export const fetchTweets = () => ({
  type: FETCH_TWEETS,
  payload: getTweets
});
