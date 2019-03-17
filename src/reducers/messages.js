const initialState = {
  messages: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_MESSAGES':
      return {
        ...state,
        messages: action.payload, loading: false
      };
    case 'FETCH_MESSAGES_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
