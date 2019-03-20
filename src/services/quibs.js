export const getQuibs = () => {
  return Promise.resolve([
    { _id: '1234', text: 'What up!', user: { handle: '@Key!', profileImg: 'https://static.playbill.com/dims4/default/fe6119b/2147483647/crop/5254x2957%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fplaybill-brightspot.s3.amazonaws.com%2F76%2Fb9%2F81f46d534b9db0f201c87e0369ac%2Fhamlet-public-theatre-keegan-michael-key-feature-shoot-2017-01-hr.jpg' } },
    { _id: '1235', text: 'Blah Blah!', user: { handle: '@Tyler', profileImg: 'https://via.placeholder.com/300' } },
    { _id: '1236', text: 'Feed me!', user: { handle: '@Lync', profileImg: 'https://via.placeholder.com/300' } },
    { _id: '1237', text: 'Give me the ball!', user: { handle: '@Cody', profileImg: 'https://via.placeholder.com/300' } }
  ]);
};
