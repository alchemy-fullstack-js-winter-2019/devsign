import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/tweetsApi';

export const [
  fetchTweets,
  FETCH_TWEETS,
  FETCH_TWEETS_PENDING,
  FETCH_TWEETS_FULFILLED,
  FETCH_TWEETS_REJECTED
] = createAction('FETCH_TWEETS', getTweets);
