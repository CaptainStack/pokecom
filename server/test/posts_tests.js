process.env.NODE_ENV = 'test';

const Post = require('../models').Post;
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);
describe('Posts', () => {
  Post.destroy({where: {}});

  describe('/GET posts', () => {
    it('it should GET all the posts', (done) => {
      chai.request(server)
        .get('/api/posts')
        .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST posts', () => {
    it('it should create a new post', (done) => {
      let post = { content: 'This is a test post.' }
      chai.request(server)
        .post('/api/posts')
        .send(post)
        .end((error, response) => {
            response.should.have.status(201);
            response.body.should.be.a('object');
            response.body.should.have.property('content');
            response.body.should.have.property('pokemon');
          done();
        });
    });
  });
});
