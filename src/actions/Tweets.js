import {
    getAllTweets,
    getUserTweets
} from '../services/tweetApi.js';


export const GET_ALL_TWEETS = 'GET_ALL_TWEETS';
export const getTweetsActions = () => ({
    type: GET_ALL_TWEETS,
    payload: getAllTweets()
});
export const GET_USER_TWEETS = 'GET_USER_TWEETS';
export const getUserTweetsAction = () => ({
    type: GET_USER_TWEETS,
    payload: getUserTweets()
});
