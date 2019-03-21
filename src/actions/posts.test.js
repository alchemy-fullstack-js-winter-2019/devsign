import { fetchPosts, FETCH_POSTS, fetchPost, FETCH_POST } from './posts';

describe('Posts action', () => {
  it('can fetch a list of posts', () => {
    const action = fetchPosts();
    expect(action).toEqual({
      type: FETCH_POSTS,
      payload: Promise.resolve()
    });
  });

  it('can fetch a post', () => {
    const action = fetchPost();
    expect(action).toEqual({
      type: FETCH_POST,
      payload: Promise.resolve()
    });
  });
});

