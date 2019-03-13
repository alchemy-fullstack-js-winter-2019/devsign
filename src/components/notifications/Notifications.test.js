import React from 'react';
import renderer from 'react-test-renderer';
import Notifications  from './Notifications';

describe('Notifications', () => {
  it('matches a snapshot', () => {

    const tree = renderer.create(
      <Notifications />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
