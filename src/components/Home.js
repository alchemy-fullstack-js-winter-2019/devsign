import React from 'react';
import UserDetails from './UserDetails';
import Chirps from './Chirps';
import Nav from './Nav';
import { Section, Main } from '../styles/mainStyle';

const chirps = [
  {
    profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
    name: 'Ray',
    handle: '@stingraymond',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
    name: 'Randy',
    handle: '@randyroute',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
    name: 'Ray',
    handle: '@stingraymond',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
    name: 'Kaiya',
    handle: '@ladybeard',
    text: 'chirp chirp chirp'
  },
  {
    profileImage: 'http://cdn.onlinewebfonts.com/svg/img_191958.png',
    name: 'Randy',
    handle: '@randyroute',
    text: 'chirp chirp chirp'
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

function Home() {
  const { name,  handle, profileImage, bannerImage, bio, location } = user;
  return (
    <>
    <Nav />
    <Main>
      <UserDetails
        name={name}
        handle={handle}
        profileImage={profileImage}
        bannerImage={bannerImage}
        bio={bio}
        location={location}
      />
      <Section>
        <Chirps chirps={chirps}/>
      </Section>
    </Main>
    </>
  );
}

export default Home;
