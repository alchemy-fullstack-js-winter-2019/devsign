import { getAllChirps } from './chirps';
import { getUserChirps } from './profile';
import { getUser } from './userDetails';

describe('selectors', () => {
  it('gets a user from state', () => {
    const state = {
      user: {
        user: {
          name: 'Jeane',
          handle: '@denimJeane',
          profileImage: 'https://joeschmoe.io/api/v1/jeane',
          bio: 'Fullstack MERN Developer / Animal Lover / Hiker',
          location: 'Portland, OR'
        }
      }
    };
      
    expect(getUser(state)).toEqual({
      name: 'Jeane',
      handle: '@denimJeane',
      profileImage: 'https://joeschmoe.io/api/v1/jeane',
      bio: 'Fullstack MERN Developer / Animal Lover / Hiker',
      location: 'Portland, OR'
    });
  });

  it('gets the current user chirps from state', () => {
    const state = {
      userChirps: {
        userChirps: [
          { _id: '1234', 
            text: 'Chirpity chirp chirp chiiiiirrrrp', 
            user: {
              name: 'Jeane',
              handle: '@denimJeane',
              profileImage: 'https://joeschmoe.io/api/v1/jeane',
              location: 'Portland, OR'
            }
          },
          { _id: '1234', 
            text: 'Chirpity chirp chirp chiiiiirrrrp', 
            user: {
              name: 'Jeane',
              handle: '@denimJeane',
              profileImage: 'https://joeschmoe.io/api/v1/jeane',
              location: 'Portland, OR'
            }
          },
          { _id: '1234', 
            text: 'Chirpity chirp chirp chiiiiirrrrp', 
            user: {
              name: 'Jeane',
              handle: '@denimJeane',
              profileImage: 'https://joeschmoe.io/api/v1/jeane',
              location: 'Portland, OR'
            }
          }
        ]
      }
    };
   
    expect(getUserChirps(state)).toHaveLength(3);
  });

  it('gets all chirps from state', () => {
    const state = {
      chirps: {
        chirps: [
          { _id: '1234', 
            text: 'Never once touched my per diem. Id go to Craft Service, get some raw veggies, bacon, Cup-A-Soup…baby, I got a stew goin', 
            user: {
              name: 'Jolee',
              handle: '@boleejolee',
              profileImage: 'https://joeschmoe.io/api/v1/jolee',
              location: 'Minneapolis, MN'
            }
          },
          { _id: '1235', 
            text: 'Michael was concerned that he was caught in a lie about his family. The family was concerned that they were being confronted by a woman they had clubbed, drugged, and left on a bench. A lady of the evening.', 
            user: {
              name: 'Jed',
              handle: '@jedAndNed',
              profileImage: 'https://joeschmoe.io/api/v1/jed',
              location: 'Palm Beach, FL'
            }
          },
          { _id: '1236', 
            text: 'What is she doing at a beauty pageant?', 
            user: {
              name: 'Jodi',
              handle: '@takeMeSailing',
              profileImage: 'https://joeschmoe.io/api/v1/jodi',
              location: 'Tulsa, OK'
            }
          }
        ]
      }
    };

    expect(getAllChirps(state)).toHaveLength(3);
  });
});
