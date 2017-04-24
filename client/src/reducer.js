import { update_posts_list, delete_post, create_new_post, update_post_form_content, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_POSTS_LIST':
      return update_posts_list(state, action.posts);
    case 'DELETE_POST':
      return delete_post(state, action.post);
    case 'CREATE_NEW_POST':
      return create_new_post(state, action.post);
    case 'UPDATE_POST_FORM_CONTENT':
      return update_post_form_content(state, action.content);
    default:
      return state;
  }
}
