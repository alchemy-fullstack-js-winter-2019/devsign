import { FETCH_TWEETS, FETCH_TWEETS_LOADING } from '../actions/tweets';

const initialState = {
  tweets: [],
  loading: false
};

export default function reducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: payload,
        loading: false
      };
    case FETCH_TWEETS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
