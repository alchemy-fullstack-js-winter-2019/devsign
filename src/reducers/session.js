import { SET_SESSION } from '../actions/session';

const initialState = {
  token: '',
  id: '',
  handle: '',
  profilePic: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION: 
      return action.payload;
  }
  return state;
}
