const http_request = require('request');
const Post = require('../models').Post;

module.exports = {
  create(request, response) {
    let pokemon_id = Math.floor(Math.random() * 721) + 1;
    http_request(`http://pokeapi.co/api/v2/pokemon/${pokemon_id}`, (error, res, body) => {
      let pokemon = JSON.parse(body);
      if (!error && res.statusCode == 200) {
        return Post
          .create({
            content: request.body.content,
            pokemon: pokemon.forms[0].name
          })
          .then(post => response.status(201).send(post))
          .catch(error => response.status(400).send(error));
      } else {
        console.log('Error reaching the Pokemon API.');
      }
    });
  },
  list(request, response) {
    return Post
      .all({ limit: 10, order: '"updatedAt" DESC' })
      .then(posts => response.status(200).send(posts))
      .catch(error => response.status(400).send(error));
  },
  find(request, response) {
    return Post
      .findById(request.params.postId)
      .then(post => !post ? response.status(404).send({ message: 'Post Not Found'}) : response.status(200).send(post))
      .catch(error => response.status(400).send(error));
  },
  destroy(request, response) {
    return Post
      .findById(request.params.postId)
      .then(post => {
        if (!post) {
          return response.status(400).send({
            message: 'Post Not Found',
          });
        }
        return post
          .destroy()
          .then(() => response.status(200).send({ message: 'Post deleted successfully.' }))
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  },
};
