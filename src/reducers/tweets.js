import { FETCH_TWEETS, FETCH_TWEETS_PENDING, FETCH_TWEETS_REJECTED, CREATE_MY_TWEET } from '../actions/tweets';
const initialState = {
  tweets: [],
  tweet: {},
  loading: false, 
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: action.payload, loading: false
      };
    case FETCH_TWEETS_PENDING: 
      return {
        ...state,
        loading: true
      };
    case FETCH_TWEETS_REJECTED:
      return {
        ...state, tweets: [], loading: false, error: action.payload
      };
    case CREATE_MY_TWEET:
      return {
        ...state, tweet: action.payload
      };
    default:
      return state;
  }
}
