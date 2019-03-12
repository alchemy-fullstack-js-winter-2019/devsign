import React from 'react';
import UserDetails from './UserDetails';
import renderer from 'react-test-renderer';

describe('UserDetails component', () => {
  it('matches a snapshot', () => {
    const  user = {
      name: 'Kaiya',
      handle: '@ladybeard',
      profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
      bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Saddle_tor_to_Hey_tor_pano.jpg',
      bio: 'Fullstack MERN Developer / Animal Lover / Hiker',
      location: 'Portland, OR'
    };
    const tree = renderer.create(
      <UserDetails 
        name={user.name}
        handle={user.handle}
        profileImage={user.profileImage}
        bannerImage={user.bannerImage}
        bio={user.bio}
        location={user.loation}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
