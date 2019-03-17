import { createAction } from 'promise-middleware-redux';
import { getTweets, getMyTweets } from '../services/services';

export const [ 
  fetchTweets, 
  FETCH_TWEETS,
  FETCH_TWEETS_PENDING,
  FETCH_TWEETS_FULFILLED,
  FETCH_TWEETS_REJECTED
] = createAction('FETCH_TWEETS', getTweets);

export const [ 
  fetchMyTweets, 
  FETCH_MY_TWEETS,
  FETCH_MY_TWEETS_PENDING
] = createAction('FETCH_MY_TWEETS', getMyTweets);
