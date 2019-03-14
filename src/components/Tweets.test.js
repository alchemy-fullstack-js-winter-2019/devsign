import React from 'react';
import renderer from 'react-test-renderer';
import Tweets from './Tweets';

describe('Tweets Test', () => {
  it('mathes a snapshot', () => {
    const tweets = [
      {
        name: 'BugS',
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRJRA8ywW_omvM7B-9KwlPGxsP6WCdGuKShl211WtKEoJ_h6D',
        handle: '@bugsbunny',
        text: 'It is sunny'
      },
      {
        name: 'John Gomex',
        profileImage: 'http://johngomex.jpeg',
        handle: '@JohnX',
        text: 'It is fake news'
      }
    ];
    const tree = renderer.create(
      <Tweets tweets={tweets} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
