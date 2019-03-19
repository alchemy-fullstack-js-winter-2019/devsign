import React from 'react';
import renderer from 'react-test-renderer';
import Tweet from './Tweet';

describe('Tweet component tests', () => {
    it('renders the Tweet component correctly', () => {
        const tweet = {};
        const tree = renderer.create(
            <Tweet tweet={tweet}/>
        );
        expect(tree).toMatchSnapshot;
    });
});
