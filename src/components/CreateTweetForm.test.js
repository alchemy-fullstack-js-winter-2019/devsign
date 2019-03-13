import React from 'react';
import CreateChirpForm from './CreateChirpForm';
import renderer from 'react-test-renderer';

describe('CreateChirpForm component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <CreateChirpForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
