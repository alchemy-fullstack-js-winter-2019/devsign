import { combineReducers } from 'redux';
import chirps from './chirps';
import userDetails from './userDetails';

export default combineReducers({
  chirps,
  userDetails
});
