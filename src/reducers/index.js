import { combineReducers } from 'redux';
import chirps from './chirps';
import userDetails from './userDetails';
import session from './session';

export default combineReducers({
  chirps,
  userDetails,
  session
});
