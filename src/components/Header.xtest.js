import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';


describe('Comment component tests', () => {
  it('renders the Header component correctly', () => {
    const tree = renderer.create(
      <Header /> 

    );
    expect(tree).toMatchSnapshot();
  });
});

