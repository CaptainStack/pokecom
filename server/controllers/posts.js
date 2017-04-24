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
};
