import React from 'react';
import renderer from 'react-test-renderer';
import CreateTweet from './CreateTweet';
import { MemoryRouter } from 'react-router-dom';

let tweet = { body: 'Best tweet', id: 21, likes: 40, retweets: 5 };

describe('CreateTweet', () => {
  it('renders CreateTweet component', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <CreateTweet tweet={tweet}/>
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot;
  });
});
