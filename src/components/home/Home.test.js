import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home component test', () => {
  it('renders the Home component correctly', () => {
    expect(shallow(<Home />)).toMatchSnapshot;
  });
});

