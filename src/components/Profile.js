import React from 'react';
import UserDetails from './UserDetails';
import CreateTweetForm from './CreateTweetForm';
import Nav from './Nav';
import Tweets from './Tweets';
import { Main, Section } from '../styles/mainStyle';

const tweets = [
  {
    profileImage: 'http://capepremierrealty.com/wp-content/uploads/2018/11/generic-profile-icon-7.jpg.png',
    name: 'Kaiya',
    handle: '@ladybeard',
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
    name: 'Kaiya',
    handle: '@ladybeard',
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
  const { name, handle, profileImage, bio, location } = user;
  return (
    <>
    <Nav />
    <Main>
      <UserDetails
        name={name}
        handle={handle}
        profileImage={profileImage}
        bio={bio}
        location={location}/>
      <Section>
        <CreateTweetForm />
        <Tweets tweets={tweets}/>
      </Section>
    </Main>
    </>
  );
}

export default Profile;
