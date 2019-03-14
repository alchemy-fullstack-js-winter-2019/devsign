export const getTweets = () => {
  return Promise.resolve([
    { _id: '1234', text: 'What up!', user: { handle: '@Motley', profileImg: 'https://via.placeholder.com/300' } },
    { _id: '1235', text: 'Blah Blah!', user: { handle: '@Tyler', profileImg: 'https://via.placeholder.com/300' } },
    { _id: '1236', text: 'Feed me!', user: { handle: '@Lync', profileImg: 'https://via.placeholder.com/300' } },
    { _id: '1237', text: 'Give me the ball!', user: { handle: '@Cody', profileImg: 'https://via.placeholder.com/300' } }
  ]);
};
