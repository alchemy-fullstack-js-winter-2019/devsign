import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Nav />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
