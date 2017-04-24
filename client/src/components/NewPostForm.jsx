import React from 'react';
import { new_post_form_changed, create_post_button_clicked } from '../events';

export const NewPostForm = ({ form_content }) => {
  return(
    <form className='NewPostForm'>
      <textarea onChange={ new_post_form_changed() } placeholder='Compose Post' value={ form_content }></textarea>
      <button onClick={ create_post_button_clicked(form_content) }>Submit</button>
    </form>
  );
}

export default NewPostForm;
