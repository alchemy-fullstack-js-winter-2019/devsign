import { combineReducers } from 'redux';
import session from './session';
import posts from './posts';

export default combineReducers({
  session,
  posts
});
