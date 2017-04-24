import { update_posts_list, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_POSTS_LIST':
      return update_posts_list(state, action.posts);
    default:
      return state;
  }
}
