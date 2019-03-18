import store from '../store';

export const getAllTweets = () =>  {
    return fetch('https://twitterclonebe.herokuapp.com/tweets', {
        headers: {
            Authorization: `Bearer ${store.getState().session.token}`
        }
    })
        .then(res => [res.ok, res.json()])
        .then(([ok, json]) => {
            if(!ok) throw json;
            return json;
        });
};

export const getUserTweets = () => {
    return Promise.resolve([
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 },
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 2, likes: 100, retweets: 10000 }, { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 3, likes: 100, retweets: 10000 },
    ]);
};
