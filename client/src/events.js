import { store } from './index';

export const delete_post_button_clicked = post => event => {
  let deleted_post = post;
  fetch(`/api/posts/${post.id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(response => {
    store.dispatch({ type: 'DELETE_POST', post: deleted_post });
  });
}

export const new_post_form_changed = () => event => {
  store.dispatch({ type: 'UPDATE_POST_FORM_CONTENT', content: event.target.value });
}

export const create_post_button_clicked = post_content => event => {
  fetch(`/api/posts/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: post_content
  })})
  .then(response => response.json())
  .then(created_post => {
    store.dispatch({ type: 'CREATE_NEW_POST', post: created_post });
  });
  event.preventDefault();
}
