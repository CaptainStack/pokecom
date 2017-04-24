const postsController = require('../controllers').posts;

module.exports = app => {
  app.get('/api', (request, response) => response.status(200).send({
    message: 'Welcome to the Pokecom API!',
  }));

  app.post('/api/posts', postsController.create);
  app.get('/api/posts', postsController.list);
  app.get('/api/posts/:postId', postsController.find);
  app.delete('/api/posts/:postId', postsController.destroy);
};
