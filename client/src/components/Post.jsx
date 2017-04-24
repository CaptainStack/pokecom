import React from 'react';

export const Post = ({ post, delete_button_action }) => <li className='Post'>{ post.content } <br /> Posted by: {post.pokemon}<button onClick={ delete_button_action }>Delete Post</button></li>;

export default Post;
