import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

describe('Profile component tests', () => {
    it('renders the Profile component correctly', () => {
        const tree = renderer.create(
            <Profile />
        );
        expect(tree).toMatchSnapshot;
    });
});
