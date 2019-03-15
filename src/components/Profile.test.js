import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';

describe('Profile component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Profile />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
