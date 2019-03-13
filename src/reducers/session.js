const initialState = {
  token: '',
  handle: '',
  id: '',
  profileImage: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION:
      return action.payload;;
    default:
      return state;
  }
}
