import chirpsReducer from './chirps';
import createChirpReducer from './createChirp';
import { FETCH_CHIRPS } from '../actions/chirps';
import { CREATE_CHIRP } from '../actions/createChirp';

describe('reducers', () => {
  describe('chirps reducer', () => {
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

      const updatedState = chirpsReducer(state, {
        type: FETCH_CHIRPS,
        payload
      });
      expect(updatedState).toEqual({
        chirps: payload,
        loading: false
      });
    });
  });
  
  describe('createChirp reducer', () => {
    it('can handle a createChirp action', () => {
      const state = {
        text: ''
      };

      const payload = 'text';
      
      const updatedState = createChirpReducer(state, {
        type: CREATE_CHIRP,
        payload
      });
      expect(updatedState).toEqual({
        text: payload
      });
    });
  });
});
