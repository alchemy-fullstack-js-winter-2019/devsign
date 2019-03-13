import React from 'react';
import Chirp from './Chirp';
import renderer from 'react-test-renderer';

describe('Chirp component', () => {
  it('matches a snapshot', () => {
    const chirp = {
      profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
      name: 'Kaiya',
      handle: '@ladybeard',
      text: 'chirp chirp chirp'
    };
    const tree = renderer.create(
      <Chirp
        profileImage={chirp.profileImage}
        name={chirp.name}
        handle={chirp.handle}
        text={chirp.text}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
