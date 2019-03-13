
  export const getChirps = () => {
  // return fetch('http://localhost:7890/tweets')
  //   .then(res => res.json());
  return Promise.resolve([
    { _id: '1234', text: 'my first tweet', user: { handle: 'brantley', profileImg: '/assets/brantley.jpg' } },
    { _id: '1235', text: 'my first tweet', user: { handle: 'samantha', profileImg: '/assets/samantha.jpg' } },
    { _id: '1236', text: 'my first tweet', user: { handle: 'khoman', profileImg: '/assets/khoman.jpg' } },
    { _id: '1237', text: 'my first tweet', user: { handle: 'tyler', profileImg: '/assets/tyler.jpg' } },
    { _id: '1238', text: 'my first tweet', user: { handle: 'james', profileImg: '/assets/james.jpg' } }
  ]);
};