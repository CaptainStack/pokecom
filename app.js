const express = require('express');

const app = express();

app.get('*', (request, response) => response.status(200).send({
  message: 'Success'
}));

module.exports = app;
