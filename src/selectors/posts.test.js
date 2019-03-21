import { getAllPosts, getPostById } from './posts';

describe ('post selectors', () => {
  it('can get a post by id', () => {
    const state = {
      posts: {
        postDetail: {
          id: 1,
          title: 'Superfoods',
          body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' 
        }
      }
    };
    const retrievedState = getPostById(state);
    expect(retrievedState).toEqual({
      id: 1,
      title: 'Superfoods',
      body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' 
    });
  });

  it('can get a list of posts', () => {
    const state = {
      posts: {
        posts: {
          0: {
            id: 1,
            title: 'Superfoods',
            body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' 
          },
          1: {
            id: 2, 
            title: 'Leafy Greens', 
            body: 'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.' 
          }
        }
      }
    };
    const retrievedState = getAllPosts(state);
    expect(retrievedState).toEqual({
      0: {
        id: 1,
        title: 'Superfoods',
        body: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.' 
      },
      1: {
        id: 2, 
        title: 'Leafy Greens', 
        body: 'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.' 
      }
    });
  });
});
