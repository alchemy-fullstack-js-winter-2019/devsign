// import { getSchmoe } from './schmoe';

export const getChirps = () => {
  return Promise.resolve([
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
    },
    { _id: '1237',
      text: 'What, so the guy we are meeting with cant even grow his own hair? COME ON! ', 
      user: {
        name: 'Jean',
        handle: '@kittyKat',
        profileImage: 'https://joeschmoe.io/api/v1/jean',
        location: 'New York, NY'
      }
    },
    { _id: '1238', 
      text: 'Everything they do is so dramatic and flamboyant. It just makes me want to set myself on fire. - Lucille Bluth.', 
      user: {
        name: 'Jeri',
        handle: '@gimmeAllTheIceCream',
        profileImage: 'https://joeschmoe.io/api/v1/jeri',
        location: 'San Francisco, CA'
      }
    },
    { _id: '1239', 
      text: 'You need to do more with Rita. Believe me, Id like to. She keeps saying that God is going to show me a sign. The… something of my ways.', 
      user: {
        name: 'Jerry',
        handle: '@whoopThereItIs',
        profileImage: 'https://joeschmoe.io/api/v1/jerry',
        location: 'Salt Lake City, UT'
      }
    },
    { _id: '12340', 
      text: 'The Army had half a day.', 
      user: {
        name: 'Jane',
        handle: '@nope_nope',
        profileImage: 'https://joeschmoe.io/api/v1/jane',
        location: 'Los Angeles, CA'
      }
    },
    { _id: '1241', 
      text: 'The guy in the $4,000 suit is holding the elevator for a guy who doesnt make that in three months.', 
      user: {
        name: 'Jaqueline',
        handle: '@jackie420',
        profileImage: 'https://joeschmoe.io/api/v1/jaqueline',
        location: 'Phoenix, AZ'
      }
    },
    { _id: '1242', 
      text: 'In fact, it was a box of Oscars legally obtained medical marijuana. Primo bud.', 
      user: {
        name: 'Jai',
        handle: '@bananananana',
        profileImage: 'https://joeschmoe.io/api/v1/jai',
        location: 'Portland, OR'
      }
    },
    { _id: '1236', 
      text: 'Never once touched my per diem.', 
      user: {
        name: 'Jodi',
        handle: '@takeMeSailing',
        profileImage: 'https://joeschmoe.io/api/v1/jodi',
        location: 'Tulsa, OK'
      }
    },
    { _id: '1237',
      text: 'Should beat everything.', 
      user: {
        name: 'Jean',
        handle: '@kittyKat',
        profileImage: 'https://joeschmoe.io/api/v1/jean',
        location: 'New York, NY'
      }
    },
    { _id: '1238', 
      text: 'Youre losing blood, arent you? Probably, my socks are wet.', 
      user: {
        name: 'Jeri',
        handle: '@gimmeAllTheIceCream',
        profileImage: 'https://joeschmoe.io/api/v1/jeri',
        location: 'San Francisco, CA'
      }
    },
    { _id: '1239', 
      text: 'Ive always been deeply passionate about nature.', 
      user: {
        name: 'Jerry',
        handle: '@whoopThereItIs',
        profileImage: 'https://joeschmoe.io/api/v1/jerry',
        location: 'Salt Lake City, UT'
      }
    },
    { _id: '12340', 
      text: 'Well, Michael, I did not find their buffoonery amusing.', 
      user: {
        name: 'Jane',
        handle: '@nope_nope',
        profileImage: 'https://joeschmoe.io/api/v1/jane',
        location: 'Los Angeles, CA'
      }
    },
    { _id: '1241', 
      text: 'Sure, let the little fruit do it. HUZZAH! ', 
      user: {
        name: 'Jaqueline',
        handle: '@jackie420',
        profileImage: 'https://joeschmoe.io/api/v1/jaqueline',
        location: 'Phoenix, AZ'
      }
    },
    { _id: '1242', 
      text: 'I need a fake passport, preferably to France… ', 
      user: {
        name: 'Jai',
        handle: '@bananananana',
        profileImage: 'https://joeschmoe.io/api/v1/jai',
        location: 'Portland, OR'
      }
    }
  ]);
};

export const getUser = () => {
  return Promise.resolve({
    name: 'Jeane',
    handle: '@denimJeane',
    profileImage: 'https://joeschmoe.io/api/v1/jeane',
    bio: 'Fullstack MERN Developer / Animal Lover / Hiker',
    location: 'Portland, OR'
  });
};

export const getUserChirps = () => {
  return Promise.resolve([
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
  ]);
};
