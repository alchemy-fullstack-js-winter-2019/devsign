import { combineReducers } from 'redux';
import tweets from './tweets';
import session from './session';
import myTweets from './myTweets';
import notifications from './notifications';
import messages from './messages';

export default combineReducers({
  tweets,
  myTweets,
  notifications,
  messages,
  session
});
