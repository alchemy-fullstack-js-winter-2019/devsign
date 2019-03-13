import { getSchmoe } from './schmoe';

export const getChirps = () => {
  return Promise.resolve([
    { _id: '1234', text: 'some text', user: {
      name: 'name',
      handle: 'handle',
      profileImage: getSchmoe(),
      location: 'location'
    }
    }
  ]);
};
