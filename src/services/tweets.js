export const getRecentTweets = () => {
  // return fetch('http://localhost:7890/tweets')
  //   .then(res => res.json());
  return Promise.resolve([
    { _id: '123', text: 'something something something', user: 'weezy', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
    { _id: '432', text: 'dang fake news on my end lol dude lets grab a brew sometime and talk code', user: 'yeezy', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
    { _id: '564', text: 'all talk', user: 'Tekashi', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
    { _id: '122', text: 'all talk', user: 'Drizzy', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
    { _id: '987', text: 'all talk', user: 'Habibi', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
  ]);
};
