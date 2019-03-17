import { Create_Tweet } from '../actions/createTweetAction';

const initialState = {
  text: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case Create_Tweet:
      return {
        ...state, text: action.payload
      };
    default:
      return state;
  }
}
