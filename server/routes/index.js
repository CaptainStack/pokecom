const postsController = require('../controllers').posts;

module.exports = app => {
  app.get('/api', (request, response) => response.status(200).send({
    message: 'Welcome to the Pokecom API!',
  }));

  app.post('/api/posts', postsController.create);
  app.get('/api/posts', postsController.list);
};
