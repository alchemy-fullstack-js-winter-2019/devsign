import React from 'react';
import renderer from 'react-test-renderer';
import TweetForm from './TweetForm';

describe('TweetForm component tests', () => {
    it('renders the TweetForm component correctly', () => {
        const term = 'some term';
        const onChange = function() {
            return console.log('onChange');
        };
        const tree = renderer.create(
            <TweetForm term={term} onChange={onChange}  />
        );
        expect(tree).toMatchSnapshot;
    });
});
