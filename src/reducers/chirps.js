import { FETCH_CHIRPS, FETCH_CHIRPS_BY_ID, CREATE_CHIRP, UPDATE_SEARCH_TERM } from '../actions/chirps';

const initialState = {
  chirps: [],
  term: '',
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHIRPS: 
      return {
        ...state,
        chirps: action.payload,
        loading: false
      };
    case FETCH_CHIRPS_BY_ID: 
      return {
        ...state,
        chirps: action.payload,
        loading: false
      };
    case CREATE_CHIRP: 
      return { 
        ...state,
        chirp: action.payload,
        loading: false
      };
    
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
        loading: false
      };
    default: 
      return state;
  }
}
