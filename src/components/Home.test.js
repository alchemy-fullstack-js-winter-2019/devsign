import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Home />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
