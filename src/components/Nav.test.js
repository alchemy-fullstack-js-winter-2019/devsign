import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Nav component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
