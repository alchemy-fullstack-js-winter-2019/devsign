import store from '../store';
import { getToken } from '../selectors/session';

export const getAllTweets = () =>  {
    return fetch(`${process.env.API_URL}/tweets`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken(store.getState())}`
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
