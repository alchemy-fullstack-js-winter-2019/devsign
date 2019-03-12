import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer', () => {
  it('renders Footer component', () => {
    const tree = renderer.create(
      <Router>
        <Footer />
      </Router>
    );
    expect(tree).toMatchSnapshot;
  });
});
