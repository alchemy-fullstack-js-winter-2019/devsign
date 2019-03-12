import React from 'react';
import Tweet from './Tweet';
import renderer from 'react-test-renderer';

describe('Tweet component', () => {
  it('matches a snapshot', () => {
    const tweet = {
      profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
      name: 'Kaiya',
      handle: '@ladybeard',
      text: 'tweet tweet tweet'
    };
    const tree = renderer.create(
      <Tweet 
        profileImage={tweet.profileImage}
        name={tweet.name}
        handle={tweet.handle}
        text={tweet.text}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
