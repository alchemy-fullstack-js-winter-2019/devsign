import React from 'react';
import CreateChirpForm from './CreateChirpForm';
import renderer from 'react-test-renderer';

describe('CreateChirpForm component', () => {
  it('matches a snapshot', () => {
    const text = 'text';
    const onChange = jest.fn();

    const tree = renderer.create(
      <CreateChirpForm 
        text={text}
        onChange={onChange}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
