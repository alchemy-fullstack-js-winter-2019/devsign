import React from 'react';
import Profile from './Profile';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Profile component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
