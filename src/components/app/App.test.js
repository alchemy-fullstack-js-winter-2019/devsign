import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

jest.mock('../../services/auth.js', () => ({}));

describe('App component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
