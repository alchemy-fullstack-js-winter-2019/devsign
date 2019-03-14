import { FETCH_TWEETS } from '../actions/tweetsAction';

const initialState = {
  tweets: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TWEETS:
      return {
        ...state, action
      };
    default: 
      return state;
  }
}
