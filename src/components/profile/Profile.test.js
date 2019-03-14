import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

describe('Profile component tests', () => {
    const fetchTweets = () => {};

    const tweets = [
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 1, likes: 100, retweets: 10000 },
        { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 2, likes: 100, retweets: 10000 }, { handle: 'kananiBoy', img: 'https://via.placeholder.com/60', body: 'some body', id: 3, likes: 100, retweets: 10000 },
    ];
    it('renders the Profile component correctly', () => {
        const tree = renderer.create(
            <Profile tweets={tweets} fetchTweets={fetchTweets}/>
        );
        expect(tree).toMatchSnapshot;
    });
});
