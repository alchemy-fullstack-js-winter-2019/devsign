import { FETCH_QUIBS } from '../actions/quibs';

const initialState = {
  quibs: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_QUIB:
      return {
        ...state,
        quib: [...state, action.payload]
      };
    case FETCH_QUIBS:
      return { ...state, quibs: action.payload };
    default: 
      return state;
  }
}
