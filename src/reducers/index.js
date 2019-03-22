import { combineReducers } from 'redux';
import recentTweets from './recentTweets';
import session from './session';

export default combineReducers({
  recentTweets,
  session
});
