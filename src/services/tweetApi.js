export const getAllTweets = () =>  {
    return fetch('https://twitterclonebe.herokuapp.com/tweets')
        .then(res => {
            console.log(res.body);
            res.json();
        });
};

export const getUserTweets = () => {
    return Promise.resolve([
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 },
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 2, likes: 100, retweets: 10000 }, { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 3, likes: 100, retweets: 10000 },
    ]);
};
