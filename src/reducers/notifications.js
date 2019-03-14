const initialState = {
  notifications: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_NOTIFICATIONS':
      return {
        ...state,
        notifications: action.payload, loading: false
      };
    case 'FETCH_NOTIFICATIONS_PENDING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
