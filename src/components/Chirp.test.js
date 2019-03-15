import React from 'react';
import Chirp from './Chirp';
import { shallow } from 'enzyme';

describe('Chirp component', () => {
  it('matches a snapshot', () => {
    const chirp = {
      profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
      name: 'Kaiya',
      handle: '@ladybeard',
      text: 'chirp chirp chirp'
    };
    const wrapper = shallow(
      <Chirp
        profileImage={chirp.profileImage}
        name={chirp.name}
        handle={chirp.handle}
        text={chirp.text}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
