import React from 'react';
import renderer from 'react-test-renderer';
import Settings from './Settings';

describe('Settings component tests', () => {
    it('renders the Settings component correctly', () => {
        const tree = renderer.create(
            <Settings />
        );
        expect(tree).toMatchSnapshot;
    });
});
