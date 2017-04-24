import React, { Component } from 'react';
import './App.css';
import { store } from './index'
import { Post } from './components/Post';
import { delete_post_button_clicked } from './events';

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
        <header>
          <h1>Pokecom</h1>
        </header>
        <h2>Posts</h2>
        <ul>
          {posts}
        </ul>
      </div>
    );
  }
}

export default App;
