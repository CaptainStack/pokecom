import React from 'react';
import { new_post_form_changed, create_post_button_clicked } from '../events';

export const NewPostForm = ({ form_content }) => {
  return(
    <form className='NewPostForm'>
      <h2>Create new post</h2>
      <textarea onChange={ new_post_form_changed() } placeholder='Compose Post' value={ form_content }></textarea>
      <div><button onClick={ create_post_button_clicked(form_content) }>Submit</button></div>
    </form>
  );
}

export default NewPostForm;
