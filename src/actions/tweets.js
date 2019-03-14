import { createAction } from 'promise-middleware-redux';
import { getTweets, getMyTweets } from '../services/services';

export const [ 
  fetchTweets, 
  FETCH_TWEETS,
  FETCH_TWEETS_PENDING
] = createAction('FETCH_TWEETS', getTweets);

export const [ 
  fetchMyTweets, 
  FETCH_MY_TWEETS,
  FETCH_MY_TWEETS_PENDING
] = createAction('FETCH_TWEETS', getMyTweets);
