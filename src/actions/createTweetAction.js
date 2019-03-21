
export const CREATE_TWEET = 'CREATE_TWEET';
export const createTweet = text => ({
  type: CREATE_TWEET,
  payload: text
});
