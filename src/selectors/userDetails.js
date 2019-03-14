export const getUser = state => {
  console.log('user', state.user.user);
  return state.user.user;
};

export const isUserLoading = state => state.user.loading;
