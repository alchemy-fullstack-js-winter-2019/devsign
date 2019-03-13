import { combineReducers } from 'redux';
import tweets from './Tweets';
import userTweets from './UserTweets';

export default combineReducers({
    tweets,
    userTweets
});
