import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

describe('Profile', () => {
  it('matches a snapshot', () => {
    // const user = {
    //   handle: 'T_on_A',
    //   name: 'Teonna Zaragoza',
    //   image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg',
    //   bio: 'I am an avid trail runner, nurse and software developer'
    // };
    // const tweets = [
    //   { _id: '1', text: 'my first tweet', user: { handle: 'T_on_A', image: 'https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg' } },
    // ];
    const tree = renderer.create(
      <Profile />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
