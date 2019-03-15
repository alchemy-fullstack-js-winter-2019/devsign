import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/auth.js', () => ({}));

describe('App component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
