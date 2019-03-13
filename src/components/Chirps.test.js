import React from 'react';
import Chirps from './Chirps';
import renderer from 'react-test-renderer';

describe('Chirps component', () => {
  it('matches a snapshot', () => {
    const chirps = [
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
      <Chirps chirps={chirps}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
