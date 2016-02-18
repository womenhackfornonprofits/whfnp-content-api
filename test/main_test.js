var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    conf = require('../config'),
    app = require('../server');

var request = supertest(app);

describe('API root', function() {
  it('should return a 200 response', function(done) {
    request.get('/')
      .expect(200)
      .expect("Content-type", /json/)
      .end(function(err, res) {
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal("Hai, I'm the API.");
        done(err);
      });
  });
});

describe('Testing CI with a failure', function() {
  it('should fail', function(done) {
    request.get('/i-dont-exist')
      .expect(200)
      .end(function(err, res) {
        done(err);
      });
  });
});
