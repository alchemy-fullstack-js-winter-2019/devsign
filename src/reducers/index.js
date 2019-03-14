import { combineReducers } from 'redux';
import tweets from './tweets';
import session from './session';
import myTweets from './myTweets';

export default combineReducers({
  tweets,
  myTweets,
  session
});
