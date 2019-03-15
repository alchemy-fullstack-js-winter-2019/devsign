import { getImageUrl } from '../services/image';
export const getTweets = () => {
  return Promise.resolve([
    {
      _id: '1s93kd',
      user: {
        name: 'BugS',
        profileImage: getImageUrl(),
        handle: '@bugsbunny'
      },
      text: 'It is sunny'
    },
    {
      _id:'s9dje9',
      user: {
        name: 'Marvin the Martian',
        profileImage: getImageUrl(),
        handle: '@MarvX'
      },
      text: 'It is fake news'
    },
    {
      _id:'d3kd9k',
      user: {
        name: 'Tasmanian',
        profileImage: getImageUrl(),
        handle: '@RazmaTas',
      },
      text: 'wifhfing',
    },
    {
      _id: '2kd9kf',
      user: {
        name: 'Daffy Duck',
        profileImage: getImageUrl(),
        handle: '@Daffys',
      },
      text: 'Yello',
    }
  ]);
};
