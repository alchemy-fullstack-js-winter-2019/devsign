import React from 'react';
import Tweets from './Tweets';
import renderer from 'react-test-renderer';

describe('Tweets component', () => {
  it('matches a snapshot', () => {
    const tweets = [
      {
        profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
        name: 'Ray',
        handle: '@stingraymond',
        text: 'tweet tweet tweet'
      },
      {
        profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
        name: 'Kaiya',
        handle: '@ladybeard',
        text: 'tweet tweet tweet'
      },
      {
        profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
        name: 'Randy',
        handle: '@randyroute',
        text: 'tweet tweet tweet'
      }
    ];
    const tree = renderer.create(
      <Tweets tweets={tweets}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
