import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

let tweet = { body: 'Best tweet', id: 21, likes: 40, retweets: 5 };

describe('Home', () => {
  it('renders Home component', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Home tweet={tweet}/>
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot;
  });
});
