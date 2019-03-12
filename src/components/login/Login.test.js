import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';

describe('Login component tests', () => {
    it('renders the Login component correctly', () => {
        const tree = renderer.create(
            <Login />
        );
        expect(tree).toMatchSnapshot;
    });
});
