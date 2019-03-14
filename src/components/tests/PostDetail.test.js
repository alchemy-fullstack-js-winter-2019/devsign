import React from 'react';
import renderer from 'react-test-renderer';
import PostDetail from '../PostDetail';
import { MemoryRouter } from 'react-router';

describe('Post Detail snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <PostDetail />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
