import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';
import { MemoryRouter } from 'react-router-dom';

describe('Profile', () => {
  it('renders Profile component', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot;
  });
});
