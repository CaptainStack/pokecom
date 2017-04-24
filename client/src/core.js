export const INITIAL_STATE = { posts: [] };

export const update_posts_list = (state, posts) => {
  return { posts: posts }
}

export const delete_post = (state, post) => {
  state.posts.splice(state.posts.indexOf(post), 1);
  return { posts: state.posts }
}
