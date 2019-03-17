import reducer from './tweets';

describe('reducers', () => {
  let state = null;
  
  beforeEach(() => {
    state = {
      user: {
        username: 'shabz',
        password: 'passittodaword'
      }
    };
  });

  it('updates user', () => {
    const action = {
      type: 'FETCH_USER',
      payload: {
        username: 'shabz1',
        password: 'passit'
      }
    };

    const result = reducer(state, action);

    expect(result).toEqual({
      ...state,
      user: {
        username: 'shabz1',
        password: 'passit'
      }
    });
  });
});
