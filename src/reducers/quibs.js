import { FETCH_QUIBS, CREATE_QUIB } from '../actions/quibs';

const initialState = {
  quibs: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_QUIB:
      return {
        ...state,
        quibs: [...state.quibs, action.payload]
      };
    case FETCH_QUIBS:
      return { ...state, quibs: action.payload };
    default: 
      return state;
  }
}
