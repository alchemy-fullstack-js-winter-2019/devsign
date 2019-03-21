import reducer from './posts';
import { FETCH_POST, FETCH_POSTS } from '../actions/posts';

describe('Posts reducer', () => {
  it('handles a fetch post action', () => {
    const state = {
      postDetail: {
        id: null,
        title: '',
        body: ''
      }
    };
    const fetchedState = reducer(state, {
      type: FETCH_POST,
      payload: {
        id: 1,
        title: 'Superfoods',
        body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' 
      }
    });
    expect(fetchedState).toEqual({
      postDetail: {
        id: 1,
        title: 'Superfoods',
        body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' 
      }
    });
  });

  it('handles a fetch posts action', () => {
    const state = {
      posts: [{
        id: null,
        title: '',
        body: ''
      }]
    };
    const fetchedState = reducer(state, {
      type: FETCH_POSTS,
      payload: [
        {
          id: 1,
          title: 'Superfoods',
          body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' 
        },
        {
          id: 2, 
          title: 'Leafy Greens', 
          body: 'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.' 
        }
      ]
    });
    expect(fetchedState).toEqual({
      posts: [
        {
          id: 1,
          title: 'Superfoods',
          body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' 
        },
        {
          id: 2, 
          title: 'Leafy Greens', 
          body: 'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.' 
        }
      ]
    });
  });
});
