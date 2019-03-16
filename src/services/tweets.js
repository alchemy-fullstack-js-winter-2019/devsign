export const getTweets = () => {
  return Promise.resolve([
    {
      _id: '1s93kd',
      user: {
        name: 'BugS',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552681207/Bugs.jpg',
        handle: '@bugsbunny'
      },
      text: 'It is sunny'
    },
    {
      _id:'s9dje9',
      user: {
        name: 'Marvin the Martian',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552684573/Marvin.jpg',
        handle: '@MarvX'
      },
      text: 'It is fake news'
    },
    {
      _id:'d3kd9k',
      user: {
        name: 'Tasmanian',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552684361/Taz.jpg',
        handle: '@RazmaTas',
      },
      text: 'wifhfing',
    },
    {
      _id: '2kd9kf',
      user: {
        name: 'Daffy Duck',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/upload/c_scale,h_102,w_110/v1552684440/Daffy.jpg',
        handle: '@Daffys',
      },
      text: 'Yello',
    },
  ]);
};
