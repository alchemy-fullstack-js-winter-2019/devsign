import { combineReducers } from 'redux';
import tweets from './tweets';
import session from './session';

export default combineReducers({
  tweets,
  session
});
