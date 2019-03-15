export const CREATE_CHIRP = 'CREATE_CHIRP';
export const createChirp = text => ({
  type: CREATE_CHIRP,
  payload: text
});
