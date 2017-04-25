import React from 'react';
import '../styles/Post.css';

export const Post = ({ post, delete_button_action }) => 
  <div className='Post'>
    <h3>{ post.content }</h3>
    <p>Posted by: {post.pokemon} [<span onClick={ delete_button_action }>delete</span>]</p>
  </div>

export default Post;
