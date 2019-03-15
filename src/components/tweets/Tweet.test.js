import React from 'react';
import renderer from 'react-test-renderer';
import Tweet from './Tweet';

describe('Tweet', () => {
  it('matches a snapshot', () => {
    const tweet = {
      _id:'',
      userPic:'',
      user:'',
      body:''
    };

    const component = renderer.create(
      <Tweet tweet={tweet}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});