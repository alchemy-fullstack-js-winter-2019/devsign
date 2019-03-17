import React from 'react';
import renderer from 'react-test-renderer';
import Landing from './Landing';
import { MemoryRouter } from 'react-router-dom';

describe('Landing', () => {
  it('matches a snapshot', () => {

    const tree = renderer.create(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
