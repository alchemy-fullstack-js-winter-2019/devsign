import { Create_Tweet } from '../actions/createTweetAction';

const initialState = {
  newTweet: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case Create_Tweet:
      return {
        ...state, newTweet: action.payload
      };
    default:
      return state;
  }
}
