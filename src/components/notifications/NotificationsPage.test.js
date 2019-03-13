import React from 'react';
import renderer from 'react-test-renderer';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('matches a snapshot', () => {
    const notifications = [];
    const tree = renderer.create(
      <Notifications notifications={notifications}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
