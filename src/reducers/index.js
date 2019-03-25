import { combineReducers } from 'redux';
import quibs from './quibs';
import session from './session';

export default combineReducers({
  quibs,
  session
});
