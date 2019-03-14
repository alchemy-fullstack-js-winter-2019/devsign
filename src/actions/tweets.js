import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/services';

export const [ 
  fetchTweets, 
  FETCH_TWEETS,
  FETCH_TWEETS_PENDING
] = createAction('FETCH_TWEETS', getTweets);


