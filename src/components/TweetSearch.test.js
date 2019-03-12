import React from 'react';
import renderer from 'react-test-renderer';
import TweetSearch from './TweetSearch';
import { MemoryRouter } from 'react-router-dom';

describe('TweetSearch', () => {
  it('renders TweetSearch component', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <TweetSearch term={'tweet'} onChange={jest.fn()}/>
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot;
  });
});
