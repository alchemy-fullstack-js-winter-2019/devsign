import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/tweets';

export const [
  fetchTweets,
  FETCH_TWEETS,
  FETCH_TWEETS_PENDING
] = createAction('FETCH_TWEETS', getTweets);
