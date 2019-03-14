import { combineReducers } from 'redux';
import chirps from './chirps';
import user from './userDetails';
import session from './session';
import userChirps from './profile';

export default combineReducers({
  chirps,
  user,
  session,
  userChirps
});
