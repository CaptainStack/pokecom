import React, { Component } from 'react';
import './styles/App.css';
import { store } from './index'
import { delete_post_button_clicked } from './events';
import { Post } from './components/Post';
import { NewPostForm } from './components/NewPostForm';
import { Newsfeed } from './components/Newsfeed';

class App extends Component {
  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => store.dispatch({ type: 'UPDATE_POSTS_LIST', posts: posts }));
  }

  render() {
    let posts = this.props.state.posts.map(
      post => <Post key={ post.id } post={ post } delete_button_action={ delete_post_button_clicked(post) } />
    );
    return (
      <div className="App">
        <header><h1>Pokecom</h1></header>
        <div className='main-content'>
          <NewPostForm form_content={ this.props.state.post_form_content }/>
          <Newsfeed posts={posts}/>
        </div>
      </div>
    );
  }
}

export default App;
