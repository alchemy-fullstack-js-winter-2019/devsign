import reducer from './chirps';
import { FETCH_CHIRPS } from '../actions/chirps';

describe('reducers', () => {
  it('can handle a fetch to update chirps', () => {
    const state = {
      chirps: [],
      loading: false
    };

    const payload = [
      { _id: '1234', 
        text: 'Never once touched my per diem. Id go to Craft Service, get some raw veggies, bacon, Cup-A-Soup…baby, I got a stew goin', 
        user: {
          name: 'Jolee',
          handle: '@boleejolee',
          profileImage: 'https://joeschmoe.io/api/v1/jolee',
          location: 'Minneapolis, MN'
        }
      }
    ]; 
  

    const updatedState = reducer(state, {
      type: FETCH_CHIRPS,
      payload
    });
    expect(updatedState).toEqual({
      chirps: payload,
      loading: false
    });
  });
});
