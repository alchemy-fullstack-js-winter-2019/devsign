import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';
describe('Comment component tests', () => {
  it('renders the Comment component correctly', () => {

    const tree = renderer.create(
      <Footer /> 

    );
    expect(tree).toMatchSnapshot();
  });
});
