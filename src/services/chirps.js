export const getChirps = () => {
  // return fetch('http://localhost:7890/tweets')
  //   .then(res => res.json());
  return Promise.resolve([
    { _id: '1234', text: 'my first tweet', user: { handle: 'brantley', profileImg: 'http://www.anaivanovic.com/sites/default/files/styles/flexslider_full_mobile/public/profile.jpg?itok=50Q_EqHf' } },
    { _id: '1235', text: 'my first tweet', user: { handle: 'samantha', profileImg: 'http://www.anaivanovic.com/sites/default/files/styles/flexslider_full_mobile/public/profile.jpg?itok=50Q_EqHf' } },
    { _id: '1236', text: 'my first tweet', user: { handle: 'khoman', profileImg: '/http://www.anaivanovic.com/sites/default/files/styles/flexslider_full_mobile/public/profile.jpg?itok=50Q_EqHf' } },
    { _id: '1237', text: 'my first tweet', user: { handle: 'tyler', profileImg: 'http://www.anaivanovic.com/sites/default/files/styles/flexslider_full_mobile/public/profile.jpg?itok=50Q_EqHf' } },
    { _id: '1238', text: 'my first tweet', user: { handle: 'james', profileImg: 'http://www.anaivanovic.com/sites/default/files/styles/flexslider_full_mobile/public/profile.jpg?itok=50Q_EqHf' } }
  ]);
};
