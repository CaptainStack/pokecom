import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {posts: []}

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pokecom</h1>
        </header>
        <h2>Posts</h2>
        <ul>
        {this.state.posts.map(post =>
          <li key={post.id}>{post.content}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default App;
