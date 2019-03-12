import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  it('renders Header component', () => {
    const tree = renderer.create(
      <Router>
        <Header />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
