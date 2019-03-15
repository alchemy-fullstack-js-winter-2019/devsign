export const CREATE_CHIRP = 'CREATE_CHIRP';
export const createChirp = text => ({
  type: CREATE_CHIRP,
  payload: text
});

export const ADD_CREATED_CHIRP = 'ADD_CREATED_CHIRP';
export const addCreatedChirp = chirp => ({
  type: ADD_CREATED_CHIRP,
  payload: chirp
});
