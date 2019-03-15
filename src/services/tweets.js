export const getTweets = () => {
  return Promise.resolve([
    { _id: '1111', text: 'tweet tweet', user: { handle: 'mike', profileImg: 'http://i.pravatar.cc/150?img=3' } },
    { _id: '1112', text: 'tweet tweet', user: { handle: 'mike', profileImg: 'http://i.pravatar.cc/150?img=3' } },
    { _id: '1113', text: 'tweet tweet', user: { handle: 'mike', profileImg: 'http://i.pravatar.cc/150?img=3' } },
    { _id: '1114', text: 'tweet tweet', user: { handle: 'mike', profileImg: 'http://i.pravatar.cc/150?img=3' } },
    { _id: '1115', text: 'tweet tweet', user: { handle: 'mike', profileImg: 'http://i.pravatar.cc/150?img=3' } },
  ]);
};
