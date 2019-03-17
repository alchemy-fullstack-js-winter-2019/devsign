import { FETCH_TWEETS, CREATE_TWEET } from '../actions/tweetsAction';

const initialState = {
  tweets: [],
  tweet: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TWEETS:
      return {
        ...state, tweets: action.payload
      };
    case CREATE_TWEET:
      return {
        ...state, tweet: action.payload
      };
    default: 
      return state;
  }
}
