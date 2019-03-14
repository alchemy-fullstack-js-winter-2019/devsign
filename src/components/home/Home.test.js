import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home component tests', () => {
    it('renders the Home component correctly', () => {
        const fetchTweets = () => {};
        const tweets = [
            { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 },
            { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 2, likes: 100, retweets: 10000 }, { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 3, likes: 100, retweets: 10000 },
        ];
        const tree = renderer.create(
            <Home
                tweets={tweets}
                fetchTweets={fetchTweets}
            />
        );
        expect(tree).toMatchSnapshot;
    });
});
