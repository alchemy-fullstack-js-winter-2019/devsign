import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
// import UserHeader from './UserHeader';
// import SearchBar from './SearchBar';
// import FollowersTweets from './FollowersTweets';

describe('Comment component tests', () => {
  it('renders the Comment component correctly', () => {
    const logoImage = 'image';
    const user = 'user';
    const img = 'img';
    const description = 'description';
    const userLink = 'userLink';
    const tweet = 'tweet';
    const tree = renderer.create(
      <Home  
        logoImage={logoImage}
        user={user}
        img={img}
        description={description}
        userLink={userLink}
        tweet={tweet} 
      /> 

    );
    expect(tree).toMatchSnapshot();
  });
});
