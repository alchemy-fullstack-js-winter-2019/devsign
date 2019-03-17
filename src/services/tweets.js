// import store from '../store';
// import { getToken } from '../selectors/session';

export const getTweets = () => {
  // return fetch(`${process.env.API_URL}/tweets`, {
  //  headers: {
  //    Authorization: `Bearer ${getToken(store.getState())}`
  //  } 
  // })
  return Promise.resolve([
    {
      _id: '1s93kd',
      user: {
        name: 'BugS',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/fetch/c_scale,h_71,r_9,w_74/https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552681207/Bugs.jpg',
        handle: '@bugsbunny'
      },
      text: 'I dont believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then youre spending your time doing something worthwhile. Helen Mirren'
    },
    {
      _id:'s9dje9',
      user: {
        name: 'Marvin the Martian',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/fetch/c_scale,h_59,r_28,w_70/https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552684573/Marvin.jpg',
        handle: '@MarvX'
      },
      text: 'Some people have a mistaken idea that all thoughts disappear through meditation and we enter a state of blankness. There certainly are times of great tranquility when concentration is strong and we have few, if any, thoughts. But other times, we can be flooded with memories, plans or random thinking. Its important not to blame yourself. Sharon Salzberg '
    },
    {
      _id:'d3kd9k',
      user: {
        name: 'Tasmanian',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/fetch/c_scale,h_65,r_15,w_73/https://res.cloudinary.com/dg2zkyrrf/image/upload/v1552684361/Taz.jpg',
        handle: '@RazmaTas',
      },
      text: 'The journey is never ending. Theres always gonna be growth, improvement, adversity; you just gotta take it all in and do whats right, continue to grow, continue to live in the moment.'
    },
    {
      _id: '2kd9kf',
      user: {
        name: 'Daffy Duck',
        profileImage: 'https://res.cloudinary.com/dg2zkyrrf/image/fetch/c_scale,h_69,r_17,w_73/a_0/https://res.cloudinary.com/dg2zkyrrf/image/upload/c_scale%2Ch_102%2Cw_110/v1552684440/Daffy.jpg',
        handle: '@Daffys',
      },
      text: '“He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god”',
    },
  ]);
};
