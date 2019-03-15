import React from 'react';
import UserDetails from './UserDetails';
import { shallow } from 'enzyme';

describe('UserDetails component', () => {
  it('matches a snapshot', () => {
    const  user = {
      name: 'Kaiya',
      handle: '@ladybeard',
      profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
      bio: 'Fullstack MERN Developer / Animal Lover / Hiker',
      location: 'Portland, OR'
    };
    const wrapper = shallow(
      <UserDetails 
        user={user}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
