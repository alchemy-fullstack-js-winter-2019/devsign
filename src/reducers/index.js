import { combineReducers } from 'redux';
import tweets from './tweets';
import session from './session';
import myTweets from './myTweets';
import notifications from './notifications';

export default combineReducers({
  tweets,
  myTweets,
  notifications,
  session
});
