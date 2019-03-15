import { SET_AUTH } from '../actions/auth';

const initialState = {
  token: '',
  id: '',
  handle: '',
  profilePicture: '',
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_AUTH:
      return action.payload;
    default:
      return state;
  }
}
