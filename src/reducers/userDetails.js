import { FETCH_USER, FETCH_USER_PENDING } from '../actions/userDetails';

const initialState = {
  user: {},
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USER:
      return {
        ...state,
        user: payload
      };
    case FETCH_USER_PENDING:
      return {
        ...state,
        loading: true
      };
    default: 
      return state;
  }
}
