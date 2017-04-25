import React from 'react';
import '../styles/Newsfeed.css';

export const Newsfeed = ({ posts }) => 
  <div className='Newsfeed'>
    <h2>Newsfeed</h2>
    {posts}
  </div>

export default Newsfeed;
