import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Profile component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
