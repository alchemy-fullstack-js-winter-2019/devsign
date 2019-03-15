import { FETCH_POST, FETCH_POSTS } from '../actions/posts';

const initialState = {
  posts: [],
  postDetail: { id: null, title: '', body: '' }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: payload
      };
    case FETCH_POST:
      return {
        postDetail: {
          id: payload.id,
          title: payload.title,
          body: payload.body
        }
      };
    default: 
      return state;    
  }
}
