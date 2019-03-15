import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
