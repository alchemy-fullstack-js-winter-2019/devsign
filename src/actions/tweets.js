import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/tweets';

export const [
  fetchTweets,
  FETCH_TWEETS
] = createAction('FETCH_TWEETS', getTweets);
