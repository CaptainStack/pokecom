import { store } from './index';

export const delete_post_button_clicked = post => event => {
  let deleted_post = post;
  fetch(`/api/posts/${post.id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(response => response.json())
    .then(response => {
      store.dispatch({ type: 'DELETE_POST', post: deleted_post });
    });
}
