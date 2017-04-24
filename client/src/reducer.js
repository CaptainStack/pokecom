import { update_posts_list, delete_post, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_POSTS_LIST':
      return update_posts_list(state, action.posts);
    case 'DELETE_POST':
      return delete_post(state, action.post);
    default:
      return state;
  }
}
