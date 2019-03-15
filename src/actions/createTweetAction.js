import { createAction } from 'promise-middleware-redux';

export const CREATE_TWEET = 'CREATE_TWEET';
export const createTweets = () => ({
  type: CREATE_TWEET,
  payload: createTweet
});
