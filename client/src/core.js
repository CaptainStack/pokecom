export const INITIAL_STATE = { 
  posts: [],
  post_form_content: ''
};

export const update_posts_list = (state, posts) => {
  state.posts = posts;
  return state;
}

export const delete_post = (state, post) => {
  state.posts.splice(state.posts.indexOf(post), 1);
  return state;
}

export const create_new_post = (state, created_post) => {
  state.posts.push(created_post);
  state.post_form_content = '';
  return state;
}

export const update_post_form_content = (state, content) => {
  state.post_form_content = content;
  return state;
}
