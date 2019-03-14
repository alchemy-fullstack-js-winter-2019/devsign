import React from 'react';
import renderer from 'react-test-renderer';
import Posts from '../Posts';
import { MemoryRouter } from 'react-router';

describe('Posts snapshot', () => {
  it('can match a snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
