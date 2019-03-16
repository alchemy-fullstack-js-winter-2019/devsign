export const getTweets = () => {
  return Promise.resolve([
    {
      _id: '1s93kd',
      user: {
        name: 'BugS',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/fetch/c_scale,h_71,r_9,w_74/https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552681207/Bugs.jpg',
        handle: '@bugsbunny'
      },
      text: 'It is sunny'
    },
    {
      _id:'s9dje9',
      user: {
        name: 'Marvin the Martian',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/fetch/c_scale,h_59,r_28,w_70/https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552684573/Marvin.jpg',
        handle: '@MarvX'
      },
      text: 'It is fake news'
    },
    {
      _id:'d3kd9k',
      user: {
        name: 'Tasmanian',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/fetch/c_scale,h_65,r_15,w_73/https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552684361/Taz.jpg',
        handle: '@RazmaTas',
      },
      text: 'wifhfing',
    },
    {
      _id: '2kd9kf',
      user: {
        name: 'Daffy Duck',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/fetch/c_scale,h_69,r_17,w_73/a_0/https://res.cloudinary.com/dg2zkyrrf/image/upload/c_scale%2Ch_102%2Cw_110/v1552684440/Daffy.jpg',
        handle: '@Daffys',
      },
      text: 'Yello',
    },
  ]);
};
