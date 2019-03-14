import { FETCH_RECENT_TWEETS, FETCH_TWEETS_PENDING } from '../actions/tweets';

const initialState = {
  recentTweets: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_RECENT_TWEETS:
      return { ...state, recenttweets: action.payload };
    case FETCH_TWEETS_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
