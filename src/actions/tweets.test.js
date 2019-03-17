import {
  fetchUser
} from './tweets';

jest.mock('../services/twitsApi.js');

describe('actions', () => {
  it('fetches a user', () => {
    expect(fetchUser()).toEqual({
      type: 'FETCH_USER',
      payload: expect.any(Promise)
    });
  });
});
