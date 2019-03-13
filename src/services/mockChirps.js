// import { getSchmoe } from './schmoe';

export const getChirps = () => {
  return Promise.resolve([
    { _id: '1234', 
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
    { _id: '1235', 
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
    { _id: '1236', 
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
    { _id: '1237',
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
    { _id: '1238', 
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
    { _id: '1239', 
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
    { _id: '12340', 
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
    { _id: '1241', 
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
    { _id: '1242', 
      text: 'some text', 
      user: {
        name: 'name',
        handle: 'handle',
        profileImage: 'https://joeschmoe.io/api/v1/random',
        location: 'location'
      }
    },
  ]);
};

export const getUser = () => {
  return Promise.resolve({
    name: 'Kaiya',
    handle: 'ladybeard',
    profileImage: 'https://joeschmoe.io/api/v1/random',
    location: 'Portland, OR'
  });
};
