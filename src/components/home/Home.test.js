import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Home', () => {
  it('renders Home component', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot;
  });
});
