import React from 'react';

export const Post = ({ post, delete_button_action }) => <li>{ post.content } <button onClick={ delete_button_action }>Delete</button></li>;

export default Post;
