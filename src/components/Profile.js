import React from 'react';
import UserDetails from './UserDetails';
import Tweets from './Tweets';

const tweets = [
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Ray',
    handle: '@stingraymond',
    text: 'tweet tweet tweet'
  },
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'tweet tweet tweet'
  },
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Randy',
    handle: '@randyroute',
    text: 'tweet tweet tweet'
  }
];

const  user = {
  name: 'Kaiya',
  handle: '@ladybeard',
  profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
  bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Saddle_tor_to_Hey_tor_pano.jpg',
  bio: 'Fullstack MERN Developer / Animal Lover / Hiker',
  location: 'Portland, OR'
};

function Profile() {
  const { name, handle, profileImage, bannerImage, bio, location } = user;
  return (
    <>
    <UserDetails
      name={name}
      handle={handle}
      profileImage={profileImage}
      bannerImage={bannerImage}
      bio={bio}
      location={location}/>
    <section>
      <Tweets tweets={tweets}/>
    </section>
    </>
  );
}

export default Profile;
