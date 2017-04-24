const Post = require('../models').Post;

module.exports = {
  create(request, response) {
    return Post
      .create({
        content: request.body.content,
      })
      .then(post => response.status(201).send(post))
      .catch(error => response.status(400).send(error));
  },
  list(request, response) {
    return Post
      .all()
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
