import React from 'react';
import renderer from 'react-test-renderer';
import Tweets from './Tweets';



describe('Tweets', () => {
  it('matches a snapshot', () => {
    const tweets = [
      {
        'id': 'asdfgh123456',
        'name': 'Sam Smith',
        'tweeter handle': 'SamS'
      },
      {
        'id': 'alkjh0987',
        'name': 'John Gomex',
        'tweeter handle': 'JohnX'
      }
    ];
    const tree = renderer.create(
      <Tweets tweets={tweets} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
