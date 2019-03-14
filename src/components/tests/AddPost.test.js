import React from 'react';
import renderer from 'react-test-renderer';
import AddPost from '../AddPost';
import { MemoryRouter } from 'react-router';

describe('AddPost snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <AddPost />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
