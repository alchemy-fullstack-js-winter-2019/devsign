import { combineReducers } from 'redux';
import session from './Session';
import tweets from './Tweets';
import userTweets from './UserTweets';

export default combineReducers({
    session,
    tweets,
    userTweets
});
