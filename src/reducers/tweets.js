import {
  FETCH_USER
} from '../actions/tweets';

const initialState = {
  tweets: [
    {
      id: 1,
      userId: 1,
      img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
      text: 'twitter you twit'
    },
    {
      id: 2,
      userId: 2,
      img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
      text: 'twitter you twit twit'
    },
    {
      id: 3,
      userId: 3,
      img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
      text: 'twitter you twit twit twitter twit'
    }
  ],
  user: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USER:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
}
