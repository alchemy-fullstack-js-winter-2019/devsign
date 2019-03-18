import React from 'react';
import renderer from 'react-test-renderer';
import Tweets from './Tweets';

describe('Tweets', () => {
  it('matches a snapshot', () => {
    const tweet = [
      {
        name: 'Bugs Bunny',
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRJRA8ywW_omvM7B-9KwlPGxsP6WCdGuKShl211WtKEoJ_h6D',
        text: 'It is sunny'

      },
      {
        name: 'John Gomex',
        profileImage: 'http://johngomex.jpeg',
        text: 'It is fake news'
      }
    ];
    const tree = renderer.create(
      <Tweets
        profileImage={tweet.profileImage}
        name={tweet.name}
        text={tweet.text} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
