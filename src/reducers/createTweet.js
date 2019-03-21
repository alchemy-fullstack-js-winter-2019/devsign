import { CREATE_TWEET } from '../actions/createTweetAction';

const initialState = {
  text: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_TWEET:
      return {
        ...state, text: action.payload
      };
    default:
      return state;
  }
}
