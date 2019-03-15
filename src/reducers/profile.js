import { FETCH_USER_CHIRPS, FETCH_USER_CHIRPS_PENDING } from '../actions/profile';

const initialState = {
  userChirps: [],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USER_CHIRPS:
      return {
        ...state,
        userChirps: payload,
        loading: false
      };
    case FETCH_USER_CHIRPS_PENDING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

